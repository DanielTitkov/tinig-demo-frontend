import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import ProviderWrapper from "./Provider";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <ProviderWrapper store={store}>
            <App />
        </ProviderWrapper>
    </React.StrictMode>,
    document.getElementById("root"),
);

serviceWorker.unregister();
