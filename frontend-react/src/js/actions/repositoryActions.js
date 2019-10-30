// src/js/actions/repositoryActions.js
import {
    FETCH_REPOSITORIES_PENDING,
    FETCH_REPOSITORIES_SUCCESS,
    FETCH_REPOSITORIES_FAILURE,
} from "../constants/action-types";


export const fetchRepositoriesPending = () => ({
    type: FETCH_REPOSITORIES_PENDING
});

export const fetchRepositoriesSuccess = repositories => ({
    type: FETCH_REPOSITORIES_SUCCESS,
    payload: {
        repositories
    }
});

export const fetchRepositoriesFailure = error => ({
    type: FETCH_REPOSITORIES_FAILURE,
    payload: {
        error
    }
});

export function fetchRepositories(searchTerm = '') {
    return dispatch => {
        const apiUrlParam = (searchTerm === '') ? '' : '?search=' + encodeURIComponent(searchTerm);
        dispatch(fetchRepositoriesPending());
        return fetch(process.env.REACT_APP_BACKEND_NODE + '/repositories' + apiUrlParam)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchRepositoriesSuccess(json.items));
                return json.items;
            }).catch(error => dispatch(fetchRepositoriesFailure(error)));
    };
}