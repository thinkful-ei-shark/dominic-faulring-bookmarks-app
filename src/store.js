import produce from 'immer';

const bookmarkStore = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};

// I don't want to mutate the bookmarkStore directly so I'm using a
// tiny library called immer that allows me to make a draft of
// the bookmarkStore and then work on that draft and when I'm done
// assign the draft with the changes I made to the target
// object which is the bookmarkStore with Object.assign().
// I do understand I could go in and directly mutate the
// bookmarkStore directly or even change my const to a let and
// clone the bookmarkStore in each function and merge it
// and then assign it to the new updated object.
function addBookmarks(bookmarks) {
  const nextState = produce(bookmarkStore, (draft) => {
    bookmarks.forEach((bookmark) => draft.bookmarks.push(bookmark));
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function addBookmark(bookmark) {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.bookmarks.push(bookmark);
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateBookmark(id, updatedBookmark) {
  const nextState = produce(bookmarkStore, (draft) => {
    Object.assign(draft.bookmarks[getIndexOfItem(id)], updatedBookmark);
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function deleteBookmark(id) {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.bookmarks.splice(getIndexOfItem(id), 1);
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateFilter(rating) {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.filter = rating;
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateAdding() {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.adding = !draft.adding;
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateError() {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.error = !draft.error;
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function getIndexOfItem(id) {
  return bookmarkStore.bookmarks.findIndex((bookmark) => bookmark.id === id);
}

export default {
  bookmarkStore,
  addBookmark,
  updateBookmark,
  deleteBookmark,
  updateFilter,
  updateAdding,
  updateError,
  addBookmarks
};
