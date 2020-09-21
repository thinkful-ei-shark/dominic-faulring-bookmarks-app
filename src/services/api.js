import store from '../store';
const API_URL = 'https://thinkful-list-api.herokuapp.com';

async function getBookmarks() {
  try {
    const res = await fetch(`${API_URL}/dominic/bookmarks`);
    store.bookmarks = await res.json();
    return store.bookmarks;
  } catch (err) {
    console.log(err.message);
  }
}

async function addBookmark({ title, url, desc, rating }) {
  try {
    const res = await fetch(`${API_URL}/dominic/bookmarks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, url, desc, rating })
    });
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteBookmark(id) {
  try {
    await fetch(`${API_URL}/dominic/bookmarks/${id}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.log(err.message);
  }
}

export default {
  addBookmark,
  getBookmarks,
  deleteBookmark
};
