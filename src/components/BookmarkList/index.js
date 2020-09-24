import store from '../../store';
import BookmarkItem from '../BookmarkItem';

// I really need to slim this down 😂
function BookmarkList() {
  const { bookmarks } = store.bookmarkStore;
  const newestBookmarks = [];

  for (let i = bookmarks.length - 1; i >= 0; i--) {
    newestBookmarks.push(bookmarks[i]);
  }

  if (!bookmarks.length) {
    return noBookmarksFound();
  }

  if (store.bookmarkStore.filter && store.bookmarkStore.filter === 'new') {
    if (!newestBookmarks.length) {
      return noBookmarksFound();
    }

    return `
      <section class="bookmark-list">
        ${newestBookmarks
          .map((bookmark) => `${BookmarkItem(bookmark)}`)
          .join('')}
      </section>
    `;
  }

  if (store.bookmarkStore.filter && store.bookmarkStore.filter === 'old') {
    if (!bookmarks.length) {
      return noBookmarksFound();
    }
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

    if (!filteredBookmarks.length) {
      return noBookmarksFound(true);
    }

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

    if (!filteredBookmarks.length) {
      return noBookmarksFound(true);
    }

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

function noBookmarksFound(exists) {
  if (exists) {
    return `
      <section class='bookmark-list'>
        <h2 class="bookmark-list__empty">No Bookmarks Found 😕</h2>
      </section>
    `;
  }

  return `
    <section class='bookmark-list'>
      <h3 class="bookmark-list__empty">Add Your First Bookmark 🎉</h3>
    </section>
  `;
}

export default BookmarkList;
