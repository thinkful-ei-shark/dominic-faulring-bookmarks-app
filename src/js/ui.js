import $ from 'jquery';
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
  $('.js-create-bookmark-form').on('submit', bookmarks.handleBookmarkSubmit);
  $('.add-bookmark-form__btns__cancel').on(
    'click',
    bookmarks.handleBookmarkCancel
  );
  $('.js-delete-icon').on('click', bookmarks.handleBookmarkDelete);
  $('.js-add-bookmark-btn').on('click', bookmarks.handleToggleForm);
  $('.js-handle-toggle-more-info-btn').on('click', bookmarks.handleToggleInfo);
  $('.js-bookmark-list__item__rating button').on(
    'click',
    bookmarks.handleChangeRating
  );
  $('.js-filter-bookmarks').on('change', bookmarks.handleFilterBookmarks);
  return;
}

export default {
  render
};
