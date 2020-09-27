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

  try {
    const returnedBookmark = await api.addBookmark(
      await bookmark({ title, url, rating, desc })
    );
    store.addBookmark(returnedBookmark);
    store.resetFailedFormInputs();
    store.updateAdding();
    return ui.render();
  } catch (err) {
    store.updateFailedFormInputs({ title, url, rating, desc });
    return ui.render();
  }
}

function handleBookmarkCancel(e) {
  e.preventDefault();
  store.updateErrors('title', null);
  store.updateErrors('url', null);
  store.updateAdding();
  store.resetFailedFormInputs();
  return ui.render();
}

async function handleBookmarkDelete() {
  const id = $(this).closest('aside').data('bookmarkId');
  await api.deleteBookmark(id);
  store.deleteBookmark(id);
  return ui.render();
}

// do again
function handleToggleForm() {
  if (!store.bookmarkStore.adding) {
    store.updateAdding();
    return ui.render();
  }
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
