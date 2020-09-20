import api from './api';
import bookmarks from './bookmarks';
import Header from '../components/Header';

async function createBookmarksList() {
  const bookmarks = await api.getBookmarks();

  return `
    <ul>
      ${bookmarks
        .map(
          (bookmark) =>
            `<li class="js-bookmarks-item" data-bookmark-id=${bookmark.id}>${bookmark.title}</li>`
        )
        .join('')}
    </ul>
  `;
}

function createAddBookmarkForm() {
  return `
    <form class="js-create-bookmark-form create-bookmark-form">
      <label for="title">Title</label>
      <input type="text" name="title" id="title">
      <label for="rating">Rating</label>
      <input type="number" id="rating">
      <label for="url">URL</label>
      <input type="url" id="url">
      <button type="submit">Add Bookmark</button>
    </form>
  `;
}

async function render() {
  $('#root').html(`
    ${Header()}
    ${createAddBookmarkForm()} 
    ${await createBookmarksList()}
  `);
  bookmarks.handleBookmarkSubmit();
  bookmarks.handleBookmarkDelete();
}

export default {
  render
};
