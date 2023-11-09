import {GlobalLayout} from "../layouts"
import { LoginGlobal } from "../pages";
import {Ponente} from "../pages/Ponente";

const routesPonente=[
    {
        path:"/",
        layout: GlobalLayout,
        component: LoginGlobal,
    },
    {
        path:"ProyectoPonente",
        layout:GlobalLayout,
        component:Ponente,
    },
];

export default routesPonente;