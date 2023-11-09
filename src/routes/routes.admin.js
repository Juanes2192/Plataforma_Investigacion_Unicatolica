import {GlobalLayout} from "../layouts"
import { LoginGlobal } from "../pages";
import {HomeAdmin} from "../pages/Admin"
import {nosotros} from "../pages/nosotros";


const routesAdmin=[
    {
        path:"/",
        layout: GlobalLayout,
        component: LoginGlobal,
    },
    {
        path:"HomeAdmin",
        layout: GlobalLayout,
        component: HomeAdmin
    }
];

export default routesAdmin;