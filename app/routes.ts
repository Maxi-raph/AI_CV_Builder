import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index('routes/RedirectRoute.tsx'),
    route( '/Auth', 'Layouts/Auth.tsx'),
    route('/home', "routes/Home/index.tsx")] satisfies RouteConfig;
