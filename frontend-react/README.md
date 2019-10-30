> ### Coding challenge solution: based on the defined requirements the following solution has been developed. This part of the project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting started

To get the Node server running locally:

- Clone this repo
- `yarn install` or `npm install` to install all required dependencies
- `yarn start` `npm run dev` to start the local server

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Code Overview

## Dependencies

- [react](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
- [react-redux](https://github.com/reduxjs/react-redux) - Official React bindings for Redux
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux


## Application Structure

- `.env` -
- `src/index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `src/js/` - This folder contains all important js files
- `src/js/actions` - This folder contains all the important and possible defined actions
- `src/js/components` - This folder contains the graphical UI for the app (styled with [TailwindCSS](https://tailwindcss.com))
- `src/js/reducers` - This folder contains the reducers for the defined actions.
- `src/js/store` - This folder contains the redux store.

## Functionalities

- `fetchRepositories` - Get public repositories from the Github API. Limitations of the unauthenticated API are applied.
- `fetchRepositories(searchTerm)` - Filter the public repositories from the Github API for the given search term. Limitations of the unauthenticated API are applied.
- `addBookmark` - Add a specific repository to the bookmarks. Bookmarks are saved on the server as an array (JSON). 
- `removeBookmark` - Remove a bookmark with a given id form the saved bookmarks. 
