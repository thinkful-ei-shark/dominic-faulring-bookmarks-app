import AddBookmarkButton from '../AddBookmarkButton';
import FilterBookmarksButton from '../FilterBookmarksButton';

function AddAndFilterButtons() {
  return `
    <div class="add-filter-btns">
      ${AddBookmarkButton()}
      ${FilterBookmarksButton()}
    </div>
  `;
}

export default AddAndFilterButtons;
