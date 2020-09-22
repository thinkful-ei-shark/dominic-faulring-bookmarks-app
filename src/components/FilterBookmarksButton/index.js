import starIcon from './images/star-icon.svg';

function FilterBookmarksButton() {
  return `
    <div class="js-filter-bookmarks filter-bookmarks">
      <ul>
        <li><img src=${starIcon} alt="Rating"></li>
        <li><img src=${starIcon} alt="Rating"></li>
        <li><img src=${starIcon} alt="Rating"></li>
        <li><img src=${starIcon} alt="Rating"></li>
        <li><img src=${starIcon} alt="Rating"></li>
      </ul>
    </div>`;
}

export default FilterBookmarksButton;
