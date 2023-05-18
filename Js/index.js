import { Item } from '../Js/item.js';

function textDisplay() {
  return (  
    
[...document.querySelectorAll('.grid__item > .grid__item-img')].forEach(img => new Item(img))
  );

  
}
window.addEventListener('load', textDisplay);
export default textDisplay;