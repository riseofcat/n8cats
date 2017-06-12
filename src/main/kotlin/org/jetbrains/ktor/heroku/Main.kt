package org.jetbrains.ktor.heroku

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import freemarker.cache.ClassTemplateLoader
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.content.serveClasspathResources
import org.jetbrains.ktor.features.ConditionalHeaders
import org.jetbrains.ktor.features.DefaultHeaders
import org.jetbrains.ktor.features.PartialContentSupport
import org.jetbrains.ktor.features.StatusPages
import org.jetbrains.ktor.freemarker.FreeMarker
import org.jetbrains.ktor.freemarker.FreeMarkerContent
import org.jetbrains.ktor.host.embeddedServer
import org.jetbrains.ktor.http.ContentType
import org.jetbrains.ktor.http.HttpStatusCode
import org.jetbrains.ktor.http.withCharset
import org.jetbrains.ktor.jetty.Jetty
import org.jetbrains.ktor.request.uri
import org.jetbrains.ktor.request.userAgent
import org.jetbrains.ktor.response.header
import org.jetbrains.ktor.response.respondText
import org.jetbrains.ktor.routing.Routing
import org.jetbrains.ktor.routing.get
import java.io.File

val html_utf8 = ContentType.Text.Html.withCharset(Charsets.UTF_8)

fun Application.module() {
    intercept(ApplicationCallPipeline.Call) {
        if (call.request.uri == "/intercept")
            call.respondText("Test intercept")
    }
    install(DefaultHeaders)
    install(ConditionalHeaders)
    install(PartialContentSupport)

    install(FreeMarker) {
        templateLoader = ClassTemplateLoader(environment.classLoader, "templates")
    }

    install(StatusPages) {
        exception<Exception> { exception ->
            call.respond(FreeMarkerContent("error.ftl", exception, "", html_utf8))
        }
    }

    install(Routing) {
        serveClasspathResources("public")

        get("/") {
            if (false) {
                logDb(call, call.request.queryParameters.get("from"))
            }
            printHtml(call)
        }

        get("logme") {
            logDb(call, call.request.queryParameters.get("from"))
            printHtml(call)
        }

        get("/db") {
            var result: String = ""
            dataSource!!.connection.use { connection ->
                val rs = connection.createStatement().run {
                    executeQuery("SELECT * FROM loads")
                }
                while (rs.next()) {
                    result += rs.getString("time") + "   "
                    result += rs.getString("frm") + "   "
                    result += rs.getString("host") + "   "
                    result += rs.getString("agent") + "\r\n"
                }
            }
            call.respond(result)
        }
    }
}

suspend fun printHtml(call: ApplicationCall) {
    call.response.header("Content-Type", "text/html; charset=UTF-8")
    call.response.header("my_header", "my_value")
    call.response.status(HttpStatusCode.OK)
    val htmlContent = File("src/main/resources/public/index.html").readText()
    call.respond(htmlContent);
}

fun logDb(call: ApplicationCall, from: String?) {
    dataSource!!.connection.use { connection ->
        connection.createStatement().run {
            //            executeUpdate("DROP TABLE IF EXISTS loads")
            executeUpdate("CREATE TABLE IF NOT EXISTS loads (time timestamp, frm text, host text, agent text)")
            executeUpdate("INSERT INTO loads VALUES (now(), '$from', '${call.request.local.remoteHost}', '${call.request.userAgent()}')");
        }
    }
}

fun main(args: Array<String>) {
    var port: Int = 5000
    try {
        port = Integer.valueOf(System.getenv("PORT"))
    } catch(e: Exception) {

    }
    embeddedServer(Jetty, port, reloadPackages = listOf("heroku"), module = Application::module).start()
//    embeddedServer(Netty, port, reloadPackages = listOf("heroku"), module = Application::module).start()
//    embeddedServer(MyServer,port, reloadPackages = listOf("heroku"), module = Application::module).start()
}

var dataSource: HikariDataSource? = null
    get() = HikariDataSource(HikariConfig().apply {
        jdbcUrl = System.getenv("JDBC_DATABASE_URL")
    })

