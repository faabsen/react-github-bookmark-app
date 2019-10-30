// src/js/reducers/index.js
import {
    FETCH_BOOKMARKS_PENDING,
    FETCH_BOOKMARKS_SUCCESS,
    FETCH_BOOKMARKS_FAILURE,
    POST_BOOKMARK_PENDING,
    POST_BOOKMARK_SUCCESS,
    POST_BOOKMARK_FAILURE,
    DELETE_BOOKMARK_PENDING,
    DELETE_BOOKMARK_SUCCESS,
    DELETE_BOOKMARK_FAILURE
} from "../constants/action-types";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function bookmarkReducer(state = initialState, action) {
    if (action.type === FETCH_BOOKMARKS_PENDING) {
        return {
            ...state,
            loading: true,
            error: null
        };
    }
    if (action.type === FETCH_BOOKMARKS_SUCCESS) {
        return {
            ...state,
            loading: false,
            items: action.payload.bookmarks
        };
    }
    if (action.type === FETCH_BOOKMARKS_FAILURE) {
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            items: []
        };
    }
    if (action.type === POST_BOOKMARK_PENDING) {
        return {
            ...state,
            loading: true,
            error: null
        };
    }
    if (action.type === POST_BOOKMARK_SUCCESS) {
        return {
            ...state,
            loading: false,
            items: (state.items.find(bookmark => bookmark.id === parseInt(action.payload.bookmark.id))) ? state.items : state.items.concat(action.payload.bookmark)
        };
    }
    if (action.type === POST_BOOKMARK_FAILURE) {
        return {
            ...state,
            loading: false,
            error: action.payload.error,
        };
    }
    if (action.type === DELETE_BOOKMARK_PENDING) {
        return {
            ...state,
            loading: true,
            error: null
        };
    }
    if (action.type === DELETE_BOOKMARK_SUCCESS) {
        return {
            ...state,
            loading: false,
            items: state.items.filter(bookmark => bookmark.id !== parseInt(action.payload.bookmark.id))
        };
    }
    if (action.type === DELETE_BOOKMARK_FAILURE) {
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    }

    return state;
}