import BookmarkRating from './BookmarkRating';
import deleteIcon from './images/delete-icon.svg';
import infoIcon from './images/info-icon.svg';
import linkIcon from './images/link-icon.svg';

function BookmarkItem(bookmark) {
  return `
    <aside class="js-bookmarks-item bookmark-list__item" data-bookmark-id=${
      bookmark.id
    }>
      <img class="bookmark-list__item__thumbnail" src=${getImage(
        bookmark.url
      )} onerror="this.onerror=null;this.src='https://mybrewsupply.com/wp-content/uploads/2020/07/placeholder.png';">
      <h2>${bookmark.title}</h2>
      <form class="js-bookmark-list__item__rating bookmark-list__item__rating">        
        ${BookmarkRating(bookmark.rating)}
      </form>
      <div class="bookmark-list__item__btns">
        <button>
          <img src=${infoIcon} alt="Info Icon">
        </button>
        <a href=${bookmark.url} target="_blank">
          <img src=${linkIcon} alt="External Link Icon">
        </a>
        <button class="js-delete-icon">
          <img src=${deleteIcon} alt="Delete Icon">
        </button>
      </div>
    </aside>
  `;
}

// ${bookmark.desc ? `<p>${bookmark.desc}</p>` : '<p>No Description</p>'}
function getImage(url) {
  return `https://api.thumbnail.ws/api/ab5e9acacf605af02514b3f6b772e585479711882c4d/thumbnail/get?url=${url}&width=480`;
}

export default BookmarkItem;
