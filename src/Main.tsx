import * as React from 'react';
import { Route, Switch } from 'react-router-dom'

import ReactTemplate from "./components/ReactTemplate";

import Enthusiasm from "./containers/Enthusiasm";

const Main = () => (
    <main>
        <Switch>
            <Route path='/enthusiasm' component={Enthusiasm}/>
            <Route path='/template' component={ReactTemplate}/>
        </Switch>
    </main>
);

export default Main
