import {GlobalLayout} from "../layouts"
import { LoginGlobal } from "../pages";
import {HomeAdmin,CrearProyecto,ListadoProyecto} from "../pages/Admin";


const routesAdmin=[
    {
        path:"/",
        layout: GlobalLayout,
        component: LoginGlobal,
    },
    {
        path:"HomeAdmin",
        layout: GlobalLayout,
        component: HomeAdmin,
    },
    {
        path:"/CrearProyecto",
        layout: GlobalLayout,
        component: CrearProyecto,
    },
    {
        path:"/ListadoProyecto",
        layout: GlobalLayout,
        component: ListadoProyecto,

    }
];

export default routesAdmin;