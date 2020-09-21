import linkIcon from './link.svg';

function BookmarkItem(bookmark) {
  return `
    <aside class="js-bookmarks-item bookmark-list__item" data-bookmark-id=${
      bookmark.id
    }>
    <img class="bookmark-list__item__thumbnail" src=${getImage(
      bookmark.url
    )} onerror="this.onerror=null;this.src='https://mybrewsupply.com/wp-content/uploads/2020/07/placeholder.png';">
      ${bookmark.rating ? `<p>${bookmark.rating}</p>` : '<p>No Rating</p>'}
      <h3>${bookmark.title}</h3>
      <a href=${bookmark.url} target="_blank" alt="Link to ${bookmark.title}">
        <img class="bookmark-list__item__link-icon" src=${linkIcon} alt="Link Icon" />
      </a>
      ${bookmark.desc ? `<p>${bookmark.desc}</p>` : '<p>No Description</p>'}
    </aside>
  `;
}

function getImage(url) {
  return `https://api.thumbnail.ws/api/ab5e9acacf605af02514b3f6b772e585479711882c4d/thumbnail/get?url=${url}&width=480`;
}

export default BookmarkItem;
