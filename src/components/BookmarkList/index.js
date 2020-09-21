import BookmarkItem from '../BookmarkItem';
function BookmarkList(bookmarks) {
  return `
    <section class="bookmark-list">
      ${bookmarks.map((bookmark) => `${BookmarkItem(bookmark)}`).join('')}
    </section>
  `;
}

export default BookmarkList;
