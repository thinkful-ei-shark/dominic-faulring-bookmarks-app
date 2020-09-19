const API_URL = 'https://thinkful-list-api.herokuapp.com';

async function getBookmarks() {
  try {
    const res = await fetch(`${API_URL}/dom/bookmarks`);
    const bookmarks = res.json();
    return bookmarks;
  } catch (err) {
    console.log(err.message);
  }
}

async function addBookmark({ title, url, desc, rating }) {
  try {
    const res = await fetch(`${API_URL}/dom/bookmarks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, url, desc, rating })
    });
    const bookmarks = res.json();
    return bookmarks;
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteBookmark(id) {
  try {
    await fetch(`${API_URL}/dom/bookmarks/${id}`, {
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
