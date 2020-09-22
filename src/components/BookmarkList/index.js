import store from '../../store';
import BookmarkItem from '../BookmarkItem';

function BookmarkList() {
  const { bookmarks } = store.bookmarkStore;
  return `
    <section class="bookmark-list">
      ${bookmarks.map((bookmark) => `${BookmarkItem(bookmark)}`).join('')}
    </section>
  `;
}

export default BookmarkList;
