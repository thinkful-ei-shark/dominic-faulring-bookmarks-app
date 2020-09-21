function bookmark({ title, url, desc, rating }) {
  if (!desc || desc.trim() === '') {
    desc = null;
  }

  if (!rating || rating.trim() === '') {
    rating = null;
  }

  return {
    title,
    url,
    desc,
    rating
  };
}

// function validateBookmarkInputs({ title, url, desc, rating }) {}

export default bookmark;
