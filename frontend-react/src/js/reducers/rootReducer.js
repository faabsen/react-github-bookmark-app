// src/reducers/rootReducer.js

import {combineReducers} from 'redux';
import bookmarks from './bookmarkReducer';
import repositories from './repositoryReducer';

const rootReducer = combineReducers({
  bookmarks,
  repositories
})

export default rootReducer;