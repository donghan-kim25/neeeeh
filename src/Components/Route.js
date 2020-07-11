import React from 'react';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import TV from '../Routes/TV';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Navigation from './Navigation';




//composition은 두개 이상의 route의 랜더링하는 방식(동시에)
export default () => (
    <span>
    <HashRouter>
            <Navigation></Navigation>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/Detail" component={Detail} />
            <Redirect from="*" to="/" />
    </HashRouter>
    </span>
);