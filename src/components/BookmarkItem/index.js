import BookmarkRating from './BookmarkRating';
import deleteIcon from './images/delete-icon.svg';
import infoIcon from './images/info-icon.svg';
const thumbnail_url =
  'https://api.thumbnail.ws/api/ab5e9acacf605af02514b3f6b772e585479711882c4d/thumbnail/get?url=';

function BookmarkItem(bookmark) {
  return `
    <aside class="js-bookmarks-item bookmark-list__item" data-bookmark-id=${
      bookmark.id
    }>

      <div class="bookmark-list__item__thumbnail">
        <img alt=${bookmark.title} src=${getImage(
    bookmark.url
  )} onerror="this.onerror=null;this.src='https://mybrewsupply.com/wp-content/uploads/2020/07/placeholder.png';">
      </div>
      
      
      <div class="bookmark-list__item__info">
        <h2>${bookmark.title}</h2>
        <form class="js-bookmark-list__item__rating bookmark-list__item__rating">        
          ${BookmarkRating(bookmark.rating)}
        </form>
      </div>

      <div class="bookmark-list__item__more-info hide">
        <h3>Description:</h3>
        ${
          bookmark.desc
            ? `<p>${bookmark.desc}</p>`
            : '<p>No description added.</p>'
        }

        <div class="bookmark-list__item__more-info__btns">
          <a href=${
            bookmark.url
          } alt="Url Link" rel=”noopener” target="_blank">Visit Link</a>
        </div>
      </div>

      <div class="bookmark-list__item__btns">
        <button class="js-handle-toggle-more-info-btn">
          <img src=${infoIcon} alt="Info Icon">
        </button>
        <button class="js-delete-icon">
          <img src=${deleteIcon} alt="Delete Icon">
        </button>
      </div>
    </aside>
  `;
}

function getImage(url) {
  return `${thumbnail_url}${url}&width=480`;
}

export default BookmarkItem;
