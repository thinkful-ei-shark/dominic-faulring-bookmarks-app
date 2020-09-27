import produce from 'immer';

const bookmarkStore = {
  bookmarks: [],
  errors: {
    title: null,
    url: null,
  },
  filter: 0,
  adding: false,
  failedFormInputs: {
    title: null,
    url: null,
    rating: null,
    desc: null,
  },
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
  if (!bookmarks || !bookmarks.length) {
    return;
  }

  const nextState = produce(bookmarkStore, (draft) => {
    bookmarks.forEach((bookmark) => {
      let currentBookmark = bookmark;

      if (!currentBookmark.rating) {
        currentBookmark.rating = 0;
      }

      if (!currentBookmark.desc) {
        currentBookmark.desc = '';
      }

      currentBookmark.expanded = false;

      draft.bookmarks.push(currentBookmark);
    });

    return draft;
  });

  return Object.assign(bookmarkStore, nextState);
}

function addBookmark(bookmark) {
  const nextState = produce(bookmarkStore, (draft) => {
    let currentBookmark = bookmark;

    if (!currentBookmark.rating) {
      currentBookmark.rating = 0;
    }

    if (!currentBookmark.desc) {
      currentBookmark.desc = '';
    }

    draft.bookmarks.push(currentBookmark);
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function resetFailedFormInputs() {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.failedFormInputs = {
      title: null,
      url: null,
      rating: null,
      desc: null,
    };
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateFailedFormInputs({ title, url, rating, desc }) {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.failedFormInputs = {
      title: !title || !title.length ? '' : title,
      url: !url || !url.length ? '' : url,
      rating: !rating || !rating.length ? null : rating,
      desc: !desc || !desc.length ? '' : desc,
    };
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateBookmark(id, updatedBookmark) {
  const nextState = produce(bookmarkStore, (draft) => {
    let currentBookmark = updatedBookmark;

    if (!currentBookmark.rating) {
      currentBookmark.rating = 0;
    }

    if (!currentBookmark.desc) {
      currentBookmark.desc = '';
    }
    Object.assign(draft.bookmarks[getIndexOfItem(id)], currentBookmark);
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
  if (!rating || rating === bookmarkStore.filter) {
    return;
  }

  const nextState = produce(bookmarkStore, (draft) => {
    draft.filter = rating;
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

function updateExpanded(id) {
  const nextState = produce(bookmarkStore, (draft) => {
    draft.bookmarks[getIndexOfItem(id)].expanded = !draft.bookmarks[
      getIndexOfItem(id)
    ].expanded;
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

function updateErrors(key, value) {
  if (bookmarkStore.errors[key] === value) {
    return;
  }

  const nextState = produce(bookmarkStore, (draft) => {
    draft.errors[key] = value;
    return draft;
  });
  return Object.assign(bookmarkStore, nextState);
}

// Helper function to get the id of a bookmark stored in the local bookmark array
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
  updateErrors,
  addBookmarks,
  updateExpanded,
  resetFailedFormInputs,
  updateFailedFormInputs,
};
