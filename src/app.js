import $ from 'jquery';
import './styles/main.scss';
import ui from './js/ui';

async function init() {
  return await ui.render();
}

$(init);
