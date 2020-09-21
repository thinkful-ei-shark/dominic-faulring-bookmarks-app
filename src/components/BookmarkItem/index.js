import linkIcon from './link.svg';

function BookmarkItem(bookmark) {
  return `
    <aside class="js-bookmarks-item bookmark-list__item" data-bookmark-id=${
      bookmark.id
    }>
      <h3>${bookmark.title}</h3>
      <a href=${bookmark.url} target="_blank" alt="Link to ${bookmark.title}">
        <img class="bookmark-list__item__link-icon" src=${linkIcon} alt="Link Icon" />
      </a>
      ${bookmark.desc ? `<p>${bookmark.desc}</p>` : '<p>No Description</p>'}
      ${bookmark.rating ? `<p>${bookmark.rating}</p>` : '<p>No Rating</p>'} 
    </aside>
  `;
}

export default BookmarkItem;
