import api from './api';
import ui from './ui';

function handleBookmarkSubmit() {
  return $('.js-create-bookmark-form').on('submit', async function (e) {
    e.preventDefault();
    const title = $(this).find('#title').val();
    const rating = $(this).find('#rating').val();
    const url = $(this).find('#url').val();

    await api.addBookmark({ title, rating, desc: 'asdfasdf', url });
    return ui.render();
  });
}

function handleBookmarkDelete() {
  return $('.js-bookmarks-item').on('click', async function () {
    const id = $(this).data('bookmarkId');
    await api.deleteBookmark(id);
    return ui.render();
  });
}

export default {
  handleBookmarkSubmit,
  handleBookmarkDelete
};
