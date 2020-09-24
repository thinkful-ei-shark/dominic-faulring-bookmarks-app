import $ from 'jquery';
import store from './store';
import './styles/main.scss';
import api from './services/api';
import ui from './js/ui';

async function init() {
  store.addBookmarks(await api.getBookmarks());
  return await ui.render();
}

$(init);
