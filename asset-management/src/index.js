import _ from 'lodash';
import './style.css';
import imgIcon from './icon.png';

function component(){
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('webpack-line');

  const icon = new Image();
  icon.src = imgIcon;
  element.appendChild(icon);
  return element;
}
document.body.appendChild(component());