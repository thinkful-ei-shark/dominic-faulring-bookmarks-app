import emptyStarIcon from './images/star-empty-icon.svg';
import filledStarIcon from './images/star-filled-icon.svg';

function BookmarkRating(num) {
  if (!num || num === 0) {
    return `
      <button type="submit" class="rating-icon-empty" data-rating-num="1">
        <img src=${emptyStarIcon}>
      </button>
      <button type="submit" class="rating-icon-empty" data-rating-num="2">
        <img src=${emptyStarIcon}>
      </button>
      <button type="submit" class="rating-icon-empty" data-rating-num="3">
        <img src=${emptyStarIcon}>
      </button>
      <button type="submit" class="rating-icon-empty" data-rating-num="4">
        <img src=${emptyStarIcon}>
      </button>
      <button type="submit" class="rating-icon-empty" data-rating-num="5">
        <img src=${emptyStarIcon}>
      </button>
    `;
  }

  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i === num) {
      stars += `
        <button type="submit" disabled="true" data-rating-num=${i}>
          <img src=${filledStarIcon}>
        </button>
      `;
    } else if (i <= num) {
      // change to full stars
      stars += `
        <button type="submit" data-rating-num=${i}>
          <img src=${filledStarIcon}>
        </button>
      `;
    } else {
      stars += `
        <button type="submit" data-rating-num=${i}>
          <img src=${emptyStarIcon}>
        </button>
      `;
    }
  }
  return stars;
}

export default BookmarkRating;
