import './projectList';
import {allProjectsList} from './UI'

export class Project{

    constructor(name){
        this.name = name;
        this.todos = []
    }

    setName(name){
        this.name = name;
    }

    getName(name){
        return this.name;
    }

    setTodos(todos){
        this.todos = todos;
    }

    getTodos(){
        return this.todos;
    }

    addTodo(newTodo){
        this.todos.push(newTodo);
    }

    deleteTodo(oldTodo){
        this.todos = this.todos.filter((todo) => todo.name != oldTodo);
    }

}

export class Inbox {

    constructor(){

        let allProjectsArray = allProjectsList.getProjects();
        let allTodos = [];
        allProjectsArray.forEach(project => allTodos.push(project));

        //this.todos = allProjectsList.getProjects();
        this.todos = allTodos;




    }



}