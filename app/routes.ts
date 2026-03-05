import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index('routes/RedirectRoute.tsx'),
    layout( 'Layouts/Auth.tsx',[
        route('/sign_up','routes/Auth/Sign_up/index.tsx'),
        route('/login','routes/Auth/Login/index.tsx')
    ]),
    route('/home', "routes/Home/index.tsx")] satisfies RouteConfig;
