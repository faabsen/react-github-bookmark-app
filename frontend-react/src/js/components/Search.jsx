import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepositories } from '../actions/repositoryActions';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(fetchRepositories(event.target.searchTerm.value));
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="flex mb-4">
                <input
                type="text"
                name="searchTerm"
                placeholder="Search..."
                className="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 px-4 block w-full appearance-none leading-normal"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline">Search</button>
            </div>
        </form>
    );
  }
}

export default connect()(Search);
