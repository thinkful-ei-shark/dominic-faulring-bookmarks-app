import api from '../services/api';
import bookmarks from './bookmarks';
import Header from '../components/Header';
import AddBookmarkForm from '../components/AddBookmarkForm';
import BookmarkList from '../components/BookmarkList';

async function render() {
  $('#root').html(`
    ${Header()}
    ${AddBookmarkForm()}
    ${BookmarkList(await api.getBookmarks())}
  `);

  // Attach Event Handlers
  bookmarks.handleBookmarkSubmit();
  bookmarks.handleBookmarkDelete();
  return;
}

export default {
  render
};
