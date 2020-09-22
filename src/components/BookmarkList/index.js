import store from '../../store';
import BookmarkItem from '../BookmarkItem';
function BookmarkList() {
  return `
    <section class="bookmark-list">
      ${store.bookmarks.map((bookmark) => `${BookmarkItem(bookmark)}`).join('')}
    </section>
  `;
}

export default BookmarkList;
