import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepositories } from '../actions/repositoryActions';
import { postBookmark } from '../actions/bookmarkActions';

export class RepositoryList extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(fetchRepositories());
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.dispatch(postBookmark(this.props.repositories.find(item => item.id === parseInt(event.target.repository.value))));
    }


    render() {
        const { error, loading, repositories } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

      return (
        <div className="flex flex-row flex-wrap -mx-2">
          {repositories.map(repository =>
          <div className="w-1/2 mb-4 px-2 relative" key={repository.id}>
            <form onSubmit={this.handleSubmit}>
              <div className="bg-white rounded px-4 py-2">
                <input type="hidden" name="repository" value={repository.id} />
                <button type="submit" className="absolute top-0 bottom-0 right-0 block h-6 w-6 mt-2 mr-4 rounded bg-green-600 text-center text-white">&#43;</button>
                <h3 className="text-lg font-bold mb-2">
                  <svg className="h-3 w-3 inline-block fill-current text-grey-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/2000/svg"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
                  <a href={repository.html_url} className="ml-2 no-underline">{repository.full_name}</a>
                </h3>
                <p>{repository.description}</p>
                {repository.stargazers_count > 0 &&
                  <small className="block mt-2 text-sm text-gray-600">
                    <span className="inline-block mr-4">
                      <svg className="h-3 w-3 mr-1 inline-block fill-current text-gray-500" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                      {repository.stargazers_count}
                    </span>
                    <span className="inline-block mr-4">
                      <svg className="h-3 w-3 mr-1 inline-block fill-current text-gray-500" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                      {repository.forks}
                    </span>
                    <span className="inline-block mr-4">
                      <svg className="h-3 w-3 mr-1 inline-block fill-current text-gray-500" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"></path></svg>
                      {repository.language}
                    </span>
                  </small>
                }
              </div>
            </form>
          </div>
        )}
        </div>
    );
  }
}
const mapStateToProps = state => ({
  repositories: state.repositories.items,
  loading: state.repositories.loading,
  error: state.repositories.error
})
export default connect(mapStateToProps)(RepositoryList);