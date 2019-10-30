> ### Coding challenge solution: based on the defined requirements the following solution has been developed. This part of the project was bootstrapped with [express.js](https://expressjs.com/de/).

# Getting started

To get the Node server running locally:

- Clone this repo
- `yarn install` or `npm install` to install all required dependencies
- `node server.js` to start the local server

## Available Scripts

In the project directory, you can run:

### `node server.js`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view the output of the defined endpoints it in the browser.


# Code Overview

## Dependencies

- [express](https://github.com/expressjs/express) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware. Required to parse the POST requests
- [cors](https://github.com/expressjs/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. 
- [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables from a .env file into process.env
- [request](https://www.npmjs.com/package/request) - Simplified HTTP client. Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.


## Application Structure

- `.env` - a zero-dependency module that loads environment variables from a .env file into process.env
- `server.js` - The entry point to our application. This file defines our express server. It also requires the routes the application will be using in.
- `src/api` - This folder contains all the defined api functions
- `src/routes` - This folder contains all the possible defined routes

## Functionalities / endpoints

- `GET` - `/repositories` - Get public repositories from the Github API. Limitations of the unauthenticated API are applied.
- `GET` - `/repositories?search=TERM` - Filter the public repositories from the Github API for the given search term. Limitations of the unauthenticated API are applied.
- `GET` - `/bookmarks` - Get all saved bookmarks from the JSON file. 
- `POST` - `/bookmarks` - Add a specific repository (format: `{ id: required, full_name: required, html_url: required, ...}`) to the bookmarks. Bookmarks are saved on the server as an array (JSON). 
- `DELETE` - `/bookmarks/:id` - Remove a bookmark with a given id from the saved bookmarks. 
