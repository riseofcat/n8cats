package org.jetbrains.ktor.heroku

import org.jetbrains.ktor.routing.RouteSelector
import org.jetbrains.ktor.routing.RouteSelectorEvaluation
import org.jetbrains.ktor.routing.RoutingResolveContext

class PathSelector() :RouteSelector {

    override fun evaluate(context: RoutingResolveContext, index: Int): RouteSelectorEvaluation {
        val from = context.path.get(1).toLowerCase()
        if(from.toLowerCase().length == 2) {
            return RouteSelectorEvaluation(true, 0.8);
        }
        return RouteSelectorEvaluation.Missing
    }
}