export default class Project{

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

    deleteTodo(todoName){

    }

}

