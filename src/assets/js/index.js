import $ from 'jquery';
import '../styles/resets.css';
import '../styles/main.css';
import API from './APIController';

// async function main() {
//   console.log('DOM is loaded');

//   const startMsg = await $('<p>Webpack is working!</p>');
//   $('#root').append(startMsg);
// }

console.log(API.deleteBookmark('ckf94g5h1000k0k1253k5a48q'));

// $(main);
