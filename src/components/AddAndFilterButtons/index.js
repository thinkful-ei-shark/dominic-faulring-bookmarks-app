import AddBookmarkButton from '../AddBookmarkButton';
import FilterBookmarksDropdown from '../FilterBookmarksDropdown';

function AddAndFilterButtons() {
  return `
    <div class="add-filter-btns">
      ${AddBookmarkButton()}
      ${FilterBookmarksDropdown()}
    </div>
  `;
}

export default AddAndFilterButtons;
