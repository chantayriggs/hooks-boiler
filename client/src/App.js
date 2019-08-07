import React from 'react';
import {useRoutes} from "hookrouter"
import Home from "./components/home"
import Create from "./components/create"
import Read from "./components/read"
import Update from "./components/update"
import Delete from "./components/delete"

const routes = {
  "/": () =>  <Read />,
  "/create": () => <Create />
}


const App = () => {
  return useRoutes(routes)
}

export default App;
