package org.jetbrains.ktor.heroku

import org.jetbrains.ktor.routing.RouteSelector
import org.jetbrains.ktor.routing.RouteSelectorEvaluation
import org.jetbrains.ktor.routing.RoutingResolveContext

class PathSelector() :RouteSelector {

    override fun evaluate(context: RoutingResolveContext, index: Int): RouteSelectorEvaluation {
        if(context.path.size != 2) {
            return RouteSelectorEvaluation.Missing
        }
        val from = context.path.get(1)
        if(from.contains(".")) {
            return RouteSelectorEvaluation.Missing
        }
        return RouteSelectorEvaluation(true, 0.8)
    }
}