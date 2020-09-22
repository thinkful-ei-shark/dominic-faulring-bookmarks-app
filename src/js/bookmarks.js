import api from '../services/api';
import store from '../store';
import ui from './ui';
import bookmark from '../js/bookmark';

function handleBookmarkSubmit() {
  return $('.js-create-bookmark-form').on('submit', async function (e) {
    e.preventDefault();
    const title = $(this).find('#title').val();
    const url = $(this).find('#url').val();
    const rating = $(this).find('#rating').val();
    const desc = $(this).find('#description').val();

    const returnedBookmark = await api.addBookmark(
      await bookmark({ title, url, rating, desc })
    );
    store.addBookmark(returnedBookmark);
    return ui.render();
  });
}

function handleBookmarkCancel() {
  return $('.add-bookmark-form__btns__cancel').on('click', async function (e) {
    e.preventDefault();

    // Reset the form
    $(this).closest('form').trigger('reset');

    // Hide the form using display: none
    return $('.js-create-bookmark-form')
      .removeClass('add-bookmark-form')
      .addClass('hide');
  });
}

function handleBookmarkDelete() {
  return $('.js-delete-icon').on('click', async function () {
    const id = $(this).closest('aside').data('bookmarkId');
    await api.deleteBookmark(id);
    store.deleteBookmark(id);
    return ui.render();
  });
}

function handleToggleForm() {
  return $('.js-add-bookmark-btn').on('click', function () {
    $('.js-create-bookmark-form').removeClass('hide');
    $('.js-create-bookmark-form').addClass('add-bookmark-form');
  });
}

function handleChangeRating() {
  return $('.js-bookmark-list__item__rating button').on(
    'click',
    async function (e) {
      e.preventDefault();
      const bookmarkId = $(this).parent().parent().data('bookmarkId');
      const rating = $(this).data('ratingNum');
      await api.updateBookmark(bookmarkId, { rating });
      store.updateBookmark(bookmarkId, { rating });
      return ui.render();
    }
  );
}

export default {
  handleBookmarkSubmit,
  handleBookmarkDelete,
  handleToggleForm,
  handleBookmarkCancel,
  handleChangeRating
};
