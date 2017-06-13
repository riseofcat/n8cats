package org.jetbrains.ktor.heroku

import org.jetbrains.ktor.request.host
import org.jetbrains.ktor.routing.RouteSelector
import org.jetbrains.ktor.routing.RouteSelectorEvaluation
import org.jetbrains.ktor.routing.RoutingResolveContext

class DomainSelector(val domain: String) :RouteSelector {

    override fun evaluate(context: RoutingResolveContext, index: Int): RouteSelectorEvaluation {
        val split = context.call.request.host()?.split(".")
        if(split?.get(0) == domain) {
            return RouteSelectorEvaluation.Constant
        } else {
            return RouteSelectorEvaluation.Missing
        }
    }
}