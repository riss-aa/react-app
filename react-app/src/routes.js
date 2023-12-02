import React from "react";
const Home = React.lazy(() => import("./Home"))
//List
const FakultasList = React.lazy(() => import("./Fakultas/List"))
const ProdiList = React.lazy(() => import("./Prodi/List"))
//Detail
const FakultasDetail = React.lazy(() => import("./Fakultas/Detail"))
const ProdiDetail = React.lazy(() => import("./Prodi/Detail"))
//Create
const FakultasCreate = React.lazy(() => import("./Fakultas/Create"))
const ProdiCreate = React.lazy(() => import("./Prodi/Create"))
//Update
const FakultasUpdate = React.lazy(() => import("./Fakultas/Update"))
const ProdiUpdate = React.lazy(() => import("./Prodi/Update"))

const routes = [
    {path: "/", Component: Home},
    //List
    {path: "/fakultas", Component: FakultasList},
    {path: "/prodi", Component: ProdiList},
    //Detail
    {path: "/fakultas/detail/:fakultasid", Component: FakultasDetail},
    {path: "/prodi/detail/:prodiid", Component: ProdiDetail},
    //Create
    {path: "/fakultas/create/:fakultasid", Component: FakultasCreate},
    {path: "/prodi/create/:prodiid", Component: ProdiCreate},
    //Update
    {path: "/fakultas/update/:fakultasid", Component: FakultasUpdate},
    {path: "/prodi/update/:prodiid", Component: ProdiUpdate},

]

export default routes