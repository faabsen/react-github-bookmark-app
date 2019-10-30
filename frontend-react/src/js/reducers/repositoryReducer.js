// src/js/reducers/index.js
import {
    FETCH_REPOSITORIES_PENDING,
    FETCH_REPOSITORIES_SUCCESS,
    FETCH_REPOSITORIES_FAILURE,
} from "../constants/action-types";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function repositoryReducer(state = initialState, action) {
    if (action.type === FETCH_REPOSITORIES_PENDING) {
        return {
            ...state,
            loading: true,
            error: null
        };
    }
    if (action.type === FETCH_REPOSITORIES_SUCCESS) {
        return {
            ...state,
            loading: false,
            items: action.payload.repositories
        };
    }
    if (action.type === FETCH_REPOSITORIES_FAILURE) {
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            items: []
        };
    }

    return state;
}