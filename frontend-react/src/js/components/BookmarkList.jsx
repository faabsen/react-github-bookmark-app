import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBookmarks, deleteBookmark } from '../actions/bookmarkActions';

export class BookmarkList extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
          this.props.dispatch(fetchBookmarks());
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(deleteBookmark({ id: event.target.bookmarkId.value }));
    }

    render() {
        var { error, loading, bookmarks } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

      return (
        <div className="flex flex-column flex-wrap">
          {bookmarks.map(bookmark =>
            <div className="w-full relative bg-white text-gray-700 p-2 mb-2 rounded border-b border-grey" key={bookmark.id}>
              <form onSubmit={this.handleSubmit}>
                <svg className="h-3 w-3 inline-block mr-2 fill-current text-grey-dark" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/2000/svg"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
                <a href={bookmark.html_url}>{bookmark.full_name}</a>

                <input type="hidden" name="bookmarkId" value={bookmark.id} />
                <button type="submit" className="absolute top-0 bottom-0 right-0 px-2 m-2 rounded bg-red-600 text-white">&times;</button>
              </form>
            </div>
          )}
        </div>
    );
  }
}
const mapStateToProps = state => ({
    bookmarks: state.bookmarks.items,
    loading: state.bookmarks.loading,
    error: state.bookmarks.error
})

export default connect(mapStateToProps)(BookmarkList);