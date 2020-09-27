import $ from 'jquery';
import api from '../services/api';
import store from '../store';
import ui from './ui';
import bookmark from '../js/bookmark';

async function handleBookmarkSubmit(e) {
  e.preventDefault();
  const title = $(this).find('#title').val();
  const url = $(this).find('#url').val();
  const rating = $(this).find('#rating').val();
  const desc = $(this).find('#description').val();
  const errors = $(this).find('div.add-bookmark-form__errors');

  try {
    errors.addClass('hide');
    const returnedBookmark = await api.addBookmark(
      await bookmark({ title, url, rating, desc })
    );
    store.addBookmark(returnedBookmark);
    return ui.render();
  } catch (err) {
    errors.html(outputErrors());
    return errors.removeClass('hide');
  }
}

// do again?
function outputErrors() {
  const { errors } = store.bookmarkStore;
  let errString = '';
  for (let key in errors) {
    if (errors[key] !== null) {
      errString += `<p>${errors[key]}</p>`;
    }
  }
  return errString;
}

// do again
function handleBookmarkCancel(e) {
  e.preventDefault();

  // Reset any errors if any were present
  store.updateErrors('title', null);
  store.updateErrors('url', null);

  // Clear out the HTML inside the error div and reset it
  $('.add-bookmark-form__errors').html('').addClass('hide');

  // Reset the form
  $(this).closest('form').trigger('reset');

  // Hide the form using display: none
  return $('.js-create-bookmark-form')
    .removeClass('add-bookmark-form')
    .addClass('hide');
}

async function handleBookmarkDelete() {
  const id = $(this).closest('aside').data('bookmarkId');
  await api.deleteBookmark(id);
  store.deleteBookmark(id);
  return ui.render();
}

// do again
function handleToggleForm() {
  store.updateAdding();
  return render();
  $('.js-create-bookmark-form').removeClass('hide');
  return $('.js-create-bookmark-form').addClass('add-bookmark-form');
}

function handleToggleInfo() {
  const bookmarkId = $(this).parent().parent().data('bookmarkId');
  store.updateExpanded(bookmarkId);
  return ui.render();
}

async function handleChangeRating(e) {
  e.preventDefault();
  const bookmarkId = $(this).closest('aside').data('bookmarkId');
  const rating = $(this).data('ratingNum');

  await api.updateBookmark(bookmarkId, { rating });
  store.updateBookmark(bookmarkId, { rating });
  return ui.render();
}

function handleFilterBookmarks() {
  const rating = $(this).val();

  if (rating === 'unrated' || rating === 'new' || rating === 'old') {
    store.updateFilter(rating);
    return ui.render();
  }

  store.updateFilter(parseInt(rating));
  return ui.render();
}

export default {
  handleBookmarkSubmit,
  handleBookmarkDelete,
  handleToggleForm,
  handleBookmarkCancel,
  handleChangeRating,
  handleFilterBookmarks,
  handleToggleInfo,
};
