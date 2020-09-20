import $ from 'jquery';
import '../styles/main.css';
import ui from './ui';

async function init() {
  return await ui.render();
}

$(init);
