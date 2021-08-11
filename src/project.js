import './projectList';
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
