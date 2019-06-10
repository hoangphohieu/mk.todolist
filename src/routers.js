import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as page from './pages';
const Routers = () => {
    return (<BrowserRouter>
        <Switch>
            <Route exact path="/" component={page.HomePage}/>
            <Route  path="/items" component={page.ItemPage}/>
        </Switch>
    </BrowserRouter>);
};

export default Routers;