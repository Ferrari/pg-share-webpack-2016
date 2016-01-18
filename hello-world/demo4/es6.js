import { nowDate, buttonText } from './nowdate';

export function es6Component() {
  let container = document.createElement('div');

  let h2 = document.createElement('h2');
  h2.innerHTML = nowDate();
  container.appendChild(h2);

  let content = document.createElement('p');
  content.innerHTML = 'Press - ';
  content.appendChild(buttonText());
  container.appendChild(content);

  let image = document.createElement('img');
  image.src = require('./asset/small.png');
  container.appendChild(image);
  let large = document.createElement('img');
  large.src = require('./asset/large.png');
  container.appendChild(large);

  return container;
}
