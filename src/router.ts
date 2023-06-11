import { RootRoute, Route, Router } from "@tanstack/router";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Login from "./pages/Login";

const rootRoute = new RootRoute()

const layoutRoute = new Route({
    getParentRoute: () => rootRoute,
    id: 'layout',
    component: Layout
})

const indexRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: '/',
    component: Index
})

const registerRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: '/register',
    component: Register
})

const loginRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: '/login',
    component: Login
})

const routeTree = rootRoute.addChildren([
    layoutRoute.addChildren([
        indexRoute,
        registerRoute,
        loginRoute
    ])
])

const router = new Router({ routeTree })
export default router

declare module '@tanstack/router' {
    interface Register {
        router: typeof router
    }
}