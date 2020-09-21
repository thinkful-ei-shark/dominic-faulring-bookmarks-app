function AddBookmarkForm() {
  return `
    <form class="js-create-bookmark-form add-bookmark-form">
      <label for="title">Title</label>
      <input class="add-bookmark-form__input" type="text" name="title" id="title">
      <label for="rating">Rating</label>
      <input class="add-bookmark-form__input" type="number" id="rating">
      <label for="url">URL</label>
      <input class="add-bookmark-form__input" type="url" id="url">
      <button class="add-bookmark-form__btn" type="submit">Add Bookmark</button>
    </form>
  `;
}

export default AddBookmarkForm;
