import _ from 'lodash';
import './style.css';
//import Icon from './images/notepad.png'
import printMe from './print.js';



function createHeader() {
    const header = document.createElement('header');

    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    header.innerHTML = 'TODO List';
    header.classList.add('header');

    // Add the image to our existing div.
    //const myIcon = new Image();
    // myIcon.width = '200px';
    //myIcon.src = Icon;

    //element.appendChild(myIcon);

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
  
    // element.appendChild(btn);

    // header.appendChild(element);


    return header;
    }
  
document.body.appendChild(createHeader());


