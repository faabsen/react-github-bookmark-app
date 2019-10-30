// src/js/components/App.js
import React from "react";
import Bookmarks from "./BookmarkList";
import Repositories from "./RepositoryList";
import Search from "./Search";

const App = () => (
    <div className="container mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 bg-gray-500 p-4 text-gray-200">
                <h2 className="font-bold text-xl mb-2">Bookmarks</h2>
                <Bookmarks />
            </div>
            <div className="w-full md:w-3/4 bg-gray-400 p-4 text-gray-700">
                <h2 className="font-bold text-xl mb-2">Github Repositories</h2>
                <Search />
                <Repositories />
            </div>
        </div>
    </div>
);

export default App;