export function nowDate() {
  return `Current DateTime is ${new Date()}`
}

export function buttonText() {
  let btn = document.createElement('div');
  btn.className = 'btn btn-default';
  btn.innerHTML = 'Submit';
  return btn;
}
