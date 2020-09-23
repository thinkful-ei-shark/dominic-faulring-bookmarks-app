import store from '../../store';
import BookmarkItem from '../BookmarkItem';

function BookmarkList() {
  const { bookmarks } = store.bookmarkStore;

  if (store.bookmarkStore.filter) {
    const sortedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.rating >= store.bookmarkStore.filter
    );
    return `
      <section class="bookmark-list">
        ${sortedBookmarks
          .map((bookmark) => `${BookmarkItem(bookmark)}`)
          .join('')}
      </section>
    `;
  }

  return `
    <section class="bookmark-list">
      ${bookmarks.map((bookmark) => `${BookmarkItem(bookmark)}`).join('')}
    </section>
  `;
}

export default BookmarkList;
