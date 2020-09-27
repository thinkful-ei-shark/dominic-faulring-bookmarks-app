import store from '../../store';

function FormError() {
  return `
    <div class="add-bookmark-form__errors">
      ${outputErrors()}
    </div>
  `;
}

function outputErrors() {
  console.log('asdfasdf');
  const { errors } = store.bookmarkStore;
  let errString = '';
  for (let key in errors) {
    if (errors[key] !== null) {
      errString += `<p>${errors[key]}</p>`;
    }
  }
  return errString;
}

export default FormError;
