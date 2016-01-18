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

  return container;
}
