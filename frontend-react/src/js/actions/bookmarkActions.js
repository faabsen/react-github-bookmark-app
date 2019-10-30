// src/js/actions/bookmarkActions.js
import {
    FETCH_BOOKMARKS_PENDING,
    FETCH_BOOKMARKS_SUCCESS,
    FETCH_BOOKMARKS_FAILURE,
    POST_BOOKMARK_PENDING,
    POST_BOOKMARK_SUCCESS,
    POST_BOOKMARK_FAILURE,
    DELETE_BOOKMARK_PENDING,
    DELETE_BOOKMARK_SUCCESS,
    DELETE_BOOKMARK_FAILURE,
} from "../constants/action-types";


export const fetchBookmarksPending = () => ({
    type: FETCH_BOOKMARKS_PENDING
});

export const fetchBookmarksSuccess = bookmarks => ({
    type: FETCH_BOOKMARKS_SUCCESS,
    payload: {
        bookmarks
    }
});

export const fetchBookmarksFailure = error => ({
    type: FETCH_BOOKMARKS_FAILURE,
    payload: {
        error
    }
});

export const postBookmarkPending = () => ({
    type: POST_BOOKMARK_PENDING
});

export const postBookmarkSuccess = bookmark => ({
    type: POST_BOOKMARK_SUCCESS,
    payload: {
        bookmark
    }
});

export const postBookmarkFailure = error => ({
    type: POST_BOOKMARK_FAILURE,
    payload: {
        error
    }
});

export const deleteBookmarkPending = () => ({
    type: DELETE_BOOKMARK_PENDING
});

export const deleteBookmarkSuccess = bookmark => ({
    type: DELETE_BOOKMARK_SUCCESS,
    payload: {
        bookmark
    }
});

export const deleteBookmarkFailure = error => ({
    type: DELETE_BOOKMARK_FAILURE,
    payload: {
        error
    }
});

export function fetchBookmarks() {
    return dispatch => {
        dispatch(fetchBookmarksPending())
        return fetch(process.env.REACT_APP_BACKEND_NODE + '/bookmarks')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchBookmarksSuccess(json.items));
                return json.items;
            })
            .catch(error => dispatch(fetchBookmarksFailure(error)));
    };
}

export function postBookmark({ id, name, full_name, html_url, description}) {
    const bookmark = { id, name, full_name, html_url, description}
    return dispatch => {
        const request = new Request(process.env.REACT_APP_BACKEND_NODE + '/bookmarks', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(bookmark)
        });

        dispatch(postBookmarkPending());
        return fetch(request)
            .then(res => {
                dispatch(postBookmarkSuccess(bookmark));
                return bookmark;
            })
            .catch(error => dispatch(postBookmarkFailure(error)));
    };
}

export function deleteBookmark({ id = 0 }) {
    return dispatch => {
        const request = new Request(process.env.REACT_APP_BACKEND_NODE + '/bookmarks/' + id, {
            method: 'DELETE'
        });

        dispatch(deleteBookmarkPending());
        return fetch(request)
            .then(res => {
                dispatch(deleteBookmarkSuccess({ id: id }));
                return { id: id };
            })
            .catch(error => dispatch(deleteBookmarkFailure(error)));
    };
}