function FilterBookmarksButton() {
  return `
    <div class="filter-bookmarks">
      <select class="js-filter-bookmarks" id="rating" name="rating">
        <option value="" disabled selected hidden>Filter</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
        <option value="unrated">Not Rated</option>
        <option value="1">⭐&#9734;&#9734;&#9734;&#9734;</option>
        <option value="2">⭐⭐&#9734;&#9734;&#9734;</option>
        <option value="3">⭐⭐⭐&#9734;&#9734;</option>
        <option value="4">⭐⭐⭐⭐&#9734;</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>
    </div>
  `;
}

export default FilterBookmarksButton;
