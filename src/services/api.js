const API_URL = 'https://thinkful-list-api.herokuapp.com';
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} from 'unique-names-generator';

async function getBookmarks() {
  try {
    const res = await fetch(`${API_URL}/${getUsername()}/bookmarks`);
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
}

async function addBookmark({ title, url, desc, rating }) {
  try {
    const res = await fetch(`${API_URL}/${getUsername()}/bookmarks`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, url, desc, rating })
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteBookmark(id) {
  try {
    return await fetch(`${API_URL}/${getUsername()}/bookmarks/${id}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function updateBookmark(id, updatedData) {
  try {
    const res = await fetch(`${API_URL}/${getUsername()}/bookmarks/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
}

function getUsername() {
  if (localStorage.getItem('bookmarkUsername')) {
    return JSON.parse(localStorage.getItem('bookmarkUsername'));
  }

  const username = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals]
  });

  console.log(username);
  localStorage.setItem('bookmarkUsername', JSON.stringify(username));
  return username;
}

export default {
  addBookmark,
  getBookmarks,
  deleteBookmark,
  updateBookmark
};
