import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import _, { head } from 'lodash';
import './style.css';
import Icon from './images/notepad.png'
import printMe from './print.js';
import {loadHeader, loadFooter} from './header-footer';
import {loadMain} from './UI';


loadHeader();
loadMain();
loadFooter();