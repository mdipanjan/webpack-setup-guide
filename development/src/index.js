import _ from 'lodash';
import printMe from './print.js';

function component(){
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('webpack-line');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click Meeee';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());