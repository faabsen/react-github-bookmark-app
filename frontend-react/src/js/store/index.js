// src/js/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/rootReducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;