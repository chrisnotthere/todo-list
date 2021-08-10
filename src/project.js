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

///////////////////////// use similar setup for today and this week
// export class Inbox {

//     constructor(){
//         this.projects = allProjectsList.getProjects();
//     }

//     setName(name){
//         this.name = name;
//     }

//     getName(name){
//         return this.name;
//     }

//     setTodos(todos){
//         this.todos = todos;
//     }

//     getTodos(){
//         return this.todos;
//     }

//     updateInbox(){
//         this.projects = allProjectsList.getProjects();
//     }

// }