import React from "react"
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/core/Home";
const Routes  = () => {
    return <HashRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
        </Switch>
    </HashRouter>
}
export default Routes;