function FilterBookmarksButton() {
  return `
    <div class="filter-bookmarks">
      <label for="filter-bookmarks">Filter</label>
      <select class="js-filter-bookmarks" id="filter-bookmarks" name="rating">
        <option value="" disabled selected hidden></option>
        <option value="new" aria-label="Newest bookmarks">Newest</option>
        <option value="old" aria-label="Oldest bookmarks">Oldest</option>
        <option value="unrated" aria-label="Bookmarks with no rating">Not Rated</option>
        <option value="1" aria-label="1 star bookmarks and up">⭐&#9734;&#9734;&#9734;&#9734;</option>
        <option value="2" aria-label="2 star bookmarks and up">⭐⭐&#9734;&#9734;&#9734;</option>
        <option value="3" aria-label="3 star bookmarks and up">⭐⭐⭐&#9734;&#9734;</option>
        <option value="4" aria-label="5 star bookmarks and up">⭐⭐⭐⭐&#9734;</option>
        <option value="5" aria-label="5 star bookmarks">⭐⭐⭐⭐⭐</option>
      </select>
    </div>
  `;
}

export default FilterBookmarksButton;
