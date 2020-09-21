import linkIcon from './link.svg';

function BookmarkItem(bookmark) {
  return `
    <aside class="js-bookmarks-item bookmark-list__item" data-bookmark-id=${bookmark.id}>
      <h3>${bookmark.title}</h3>
      <a href=${bookmark.url} target="_blank" alt="Link to ${bookmark.title}">
        <img class="bookmark-list__item__link-icon" src=${linkIcon} alt="Link Icon" />
      </a>
    </aside>
  `;
}

export default BookmarkItem;
