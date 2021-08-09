import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './style.css';
import {loadHeader, loadFooter, loadMain, testProject2} from './UI';
//import Project from './project';
//import Todo from './todo';

// "use strict";

// let testProject = new Project('stuff project');
// console.log(testProject);

// let testTodo = new Todo('testTodo', 'do this and that and that', 'tomorrow');
// console.log(testTodo);

// testProject.addTodo(testTodo);
// console.log(testProject);

loadHeader();
loadMain(testProject2);
loadFooter();