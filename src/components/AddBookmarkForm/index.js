import FormError from './FormError';
import store from '../../store';

function AddBookmarkForm() {
  return store.bookmarkStore.adding
    ? `
    <form class="js-add-bookmark-form add-bookmark-form">
      ${
        store.bookmarkStore.errors.title || store.bookmarkStore.errors.url
          ? FormError()
          : ''
      }
      <label for="title">Title</label>
      ${
        store.bookmarkStore.failedFormInputs.title &&
        store.bookmarkStore.failedFormInputs.title.trim() !== ''
          ? `<input class="add-bookmark-form__input" type="text" name="title" id="title" value="${store.bookmarkStore.failedFormInputs.title}"></input>`
          : `<input class="add-bookmark-form__input" type="text" name="title" id="title">`
      }
      <label for="url">URL</label>
      ${
        store.bookmarkStore.failedFormInputs.url &&
        store.bookmarkStore.failedFormInputs.url.trim() !== ''
          ? `<input class="add-bookmark-form__input" type="text" id="url" value="${store.bookmarkStore.failedFormInputs.url}">`
          : `<input class="add-bookmark-form__input" type="text" id="url">`
      }
      
      <label for="rating">Rating <span>(optional)</span></label>
      <input class="add-bookmark-form__input" type="number" min="1" max="5" id="rating">
      <label for="description">Description <span>(optional)</span></label>
      <input class="add-bookmark-form__input" type="description" id="description">
      <div class="add-bookmark-form__btns">
        <button class="add-bookmark-form__btns__cancel" type="button">Cancel</button>
        <button class="add-bookmark-form__btns__submit" type="submit">Submit</button>
      </div>
    </form>
  `
    : '';
}

// $('.js-create-bookmark-form').removeClass('hide');
// return $('.js-create-bookmark-form').addClass('add-bookmark-form');

export default AddBookmarkForm;
