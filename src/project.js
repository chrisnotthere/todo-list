import './projectList';
import {allProjectsList} from './UI'
import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

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

    getTodosToday() {
        return this.todos.filter((todo) => {
          const todoDate = new Date(todo.getDateFormatted());
          return isToday(toDate(todoDate));
        });
      }
    
      getTodosThisWeek() {
        return this.todos.filter((todo) => {
          const todoDate = new Date(todo.getDateFormatted());
          return isThisWeek(subDays(toDate(todoDate), 1));
        });
      }

}




// /////////////////////// use similar setup for today and this week
// export class Today {

//     constructor(){
//         this.projects = allProjectsList.getProjects();
//         this.todos = allProjectsList.projects.todos;
//     }

//     setName(name){
//         this.name = name;
//     }

//     getName(name){
//         return this.name;
//     }

//     // setTodos(todos){
//     //     this.todos = todos;
//     // }

//     // getTodos(){
//     //     return this.todos;
//     // }

//     updateInbox(){
//         this.projects = allProjectsList.getProjects();
//     }

// }