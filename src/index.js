import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './style.css';
import {loadHeader, loadFooter} from './header-footer';
import {loadMain} from './UI';


loadHeader();
loadMain();
loadFooter();