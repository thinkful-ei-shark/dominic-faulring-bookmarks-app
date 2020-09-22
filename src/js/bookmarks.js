import api from '../services/api';
import ui from './ui';
import bookmark from '../js/bookmark';

function handleBookmarkSubmit() {
  return $('.js-create-bookmark-form').on('submit', async function (e) {
    e.preventDefault();
    const title = $(this).find('#title').val();
    const url = $(this).find('#url').val();
    const rating = $(this).find('#rating').val();
    const desc = $(this).find('#description').val();

    // @TODO - Handle input checks here?

    await api.addBookmark(await bookmark({ title, url, rating, desc }));
    return ui.render();
  });
}

function handleBookmarkDelete() {
  return $('.js-delete-icon').on('click', async function () {
    const id = $(this).closest('aside').data('bookmarkId');
    await api.deleteBookmark(id);
    return ui.render();
  });
}

function handleToggleForm() {
  return $('.js-add-bookmark-btn').on('click', function () {
    $('.js-create-bookmark-form').removeClass('hide');
    $('.js-create-bookmark-form').addClass('add-bookmark-form');
  });
}

export default {
  handleBookmarkSubmit,
  handleBookmarkDelete,
  handleToggleForm
};
