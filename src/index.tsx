import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction} from './actions/index';
// import Enthusiasm from './containers/Enthusiasm';
import './index.css';
import { enthusiasm} from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState} from './types/index';

import ReactTemplate from "./ReactTemplate";

import { BrowserRouter } from 'react-router-dom';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'React'
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ReactTemplate />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
