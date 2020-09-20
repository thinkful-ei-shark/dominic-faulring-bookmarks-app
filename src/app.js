import $ from 'jquery';
import './styles/main.css';
import ui from './js/ui';

async function init() {
  return await ui.render();
}

$(init);
