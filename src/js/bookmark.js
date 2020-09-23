import store from '../store';

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

  store.updateErrors('title', null);
  store.updateErrors('url', null);

  if (!desc || desc.trim() === '') {
    desc = null;
  }

  if (!rating || rating.trim() === '') {
    rating = null;
  }

  if (!title || title.trim() === '') {
    store.updateErrors('title', 'You must supply a title');
    throw new Error('You must supply a title');
  }

  if (!url || url.trim() === '') {
    store.updateErrors('url', 'You must supply a valid URL');
    throw new Error('You must supply a valid URL');
  }

  if (!pattern.test(url)) {
    store.updateErrors('url', 'You must supply a properly formatted URL');
    throw new Error('You must supply a properly formatted URL');
  }

  if (!protocolPattern.test(url)) {
    url = 'https://' + url;
  }

  return {
    title,
    url,
    desc,
    rating
  };
}

export default bookmark;
