import store from '../../store';
import BookmarkItem from '../BookmarkItem';

function BookmarkList() {
  const { bookmarks } = store.bookmarkStore;
  const newestBookmarks = [];

  for (let i = bookmarks.length - 1; i >= 0; i--) {
    newestBookmarks.push(bookmarks[i]);
  }

  if (store.bookmarkStore.filter && store.bookmarkStore.filter === 'new') {
    return `
      <section class="bookmark-list">
        ${newestBookmarks
          .map((bookmark) => `${BookmarkItem(bookmark)}`)
          .join('')}
      </section>
    `;
  }

  if (store.bookmarkStore.filter && store.bookmarkStore.filter === 'old') {
    return `
      <section class="bookmark-list">
        ${bookmarks.map((bookmark) => `${BookmarkItem(bookmark)}`).join('')}
      </section>
    `;
  }

  if (store.bookmarkStore.filter && store.bookmarkStore.filter === 'unrated') {
    const filteredBookmarks = bookmarks.filter(
      (bookmark) => bookmark.rating === 0
    );

    const otherBookmarks = bookmarks.filter((bookmark) => bookmark.rating > 0);

    const sortedOtherBookmarks = otherBookmarks.sort((a, b) =>
      a.rating > b.rating ? 1 : -1
    );

    return `
      <section class="bookmark-list">
        ${[...filteredBookmarks, ...sortedOtherBookmarks]
          .map((bookmark) => `${BookmarkItem(bookmark)}`)
          .join('')}
      </section>
    `;
  }

  if (store.bookmarkStore.filter && store.bookmarkStore.filter > 0) {
    const filteredBookmarks = bookmarks.filter(
      (bookmark) => bookmark.rating >= store.bookmarkStore.filter
    );

    const sortedBookmarks = filteredBookmarks.sort((a, b) =>
      a.rating > b.rating ? 1 : -1
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
      ${newestBookmarks.map((bookmark) => `${BookmarkItem(bookmark)}`).join('')}
    </section>
  `;
}

export default BookmarkList;
