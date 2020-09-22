import $ from 'jquery';
import './styles/main.scss';
import api from './services/api';
import store from './store';
import ui from './js/ui';

async function init() {
  store.addBookmarks(await api.getBookmarks());
  return await ui.render();
}

$(init);
