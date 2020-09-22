import api from '../services/api';
import bookmarks from './bookmarks';
import Header from '../components/Header';
import AddAndFilterButtons from '../components/AddAndFilterButtons';
import AddBookmarkForm from '../components/AddBookmarkForm';
import BookmarkList from '../components/BookmarkList';

async function render() {
  await api.getBookmarks();
  $('#root').html(`
    ${Header()}
    ${AddAndFilterButtons()}
    ${AddBookmarkForm()}
    ${BookmarkList()}
  `);

  // Attach Event Handlers
  bookmarks.handleToggleForm();
  bookmarks.handleBookmarkSubmit();
  return bookmarks.handleBookmarkDelete();
}

export default {
  render
};
