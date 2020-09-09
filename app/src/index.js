import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { ConnectedRouter as Router } from 'connected-react-router'
import App from "./App";
import ProviderWrapper from "./Provider";
import * as serviceWorker from "./serviceWorker";
import configureStore, { history } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <ProviderWrapper store={store}>
            <Router history={history}>
                <Route path="/:filter?" component={App} />
            </Router>
        </ProviderWrapper>
    </React.StrictMode>,
    document.getElementById("root"),
);

serviceWorker.unregister();
