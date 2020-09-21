async function bookmark({ title, url, desc, rating }) {
  const protocolPattern = new RegExp('^(https?:\\/\\/)');
  const pattern = new RegExp(
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  if (!desc || desc.trim() === '') {
    desc = null;
  }

  if (!rating || rating.trim() === '') {
    rating = null;
  }

  if (!title || title.trim() === '') {
    throw new Error('You must supply a title');
  }

  if (!url || url.trim() === '') {
    throw new Error('You must supply a URL');
  }

  if (!pattern.test(url)) {
    throw new Error('You must supply a properly formatted URL');
  }

  if (!protocolPattern.test(url)) {
    url = 'https://' + url;
  }

  if (!(await validUrl(url))) {
    throw new Error('This is an invalid URL');
  }

  return {
    title,
    url,
    desc,
    rating
  };
}

const validUrl = async (url) => {
  try {
    const res = await fetch(url);
    return res ? true : false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// function validateBookmarkInputs({ title, url, desc, rating }) {}

export default bookmark;
