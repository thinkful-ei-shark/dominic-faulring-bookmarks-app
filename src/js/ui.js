import bookmarks from './bookmarks';
import Header from '../components/Header';
import AddAndFilterButtons from '../components/AddAndFilterButtons';
import AddBookmarkForm from '../components/AddBookmarkForm';
import BookmarkList from '../components/BookmarkList';

async function render() {
  $('#root').html(`
    ${Header()}
    ${AddAndFilterButtons()}
    ${AddBookmarkForm()}
    ${BookmarkList()}
  `);

  // Attach Event Handlers
  bookmarks.handleToggleForm();
  bookmarks.handleBookmarkSubmit();
  bookmarks.handleBookmarkCancel();
  bookmarks.handleBookmarkDelete();
  bookmarks.handleChangeRating();
  bookmarks.handleFilterBookmarks();
  return;
}

export default {
  render
};
