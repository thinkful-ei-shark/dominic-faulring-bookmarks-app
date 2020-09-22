function AddBookmarkForm() {
  return `
    <form class="js-create-bookmark-form hide">
      <label for="title">Title</label>
      <input class="add-bookmark-form__input" type="text" name="title" id="title">
      <label for="rating">Rating</label>
      <input class="add-bookmark-form__input" type="number" min="1" max="5" id="rating">
      <label for="url">URL</label>
      <input class="add-bookmark-form__input" type="text" id="url">
      <label for="description">Description</label>
      <input class="add-bookmark-form__input" type="description" id="description">
      <div class="add-bookmark-form__btns">
        <button class="add-bookmark-form__btns__cancel" type="button">Cancel</button>
        <button class="add-bookmark-form__btns__submit" type="submit">Submit</button>
      </div>
    </form>
  `;
}

export default AddBookmarkForm;
