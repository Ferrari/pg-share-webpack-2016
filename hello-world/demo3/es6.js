import { nowDate } from './nowdate';

export function es6Component() {
  let container = document.createElement('div');

  let h2 = document.createElement('h2');
  h2.innerHTML = nowDate();
  container.appendChild(h2);

  return container;
}
