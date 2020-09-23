import bookmarks from './bookmarks';
import AddAndFilterButtons from '../components/AddAndFilterButtons';
import AddBookmarkForm from '../components/AddBookmarkForm';
import BookmarkList from '../components/BookmarkList';

async function render() {
  $('main').html(`
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
