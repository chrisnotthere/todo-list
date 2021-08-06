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

    deleteTodo(oldTodo){

        const foundIndex = this.todos.indexOf(({oldTodo}) => oldTodo === oldTodo.name);

        this.todos = this.todos.filter((_, index) => index !== foundIndex);


        console.log(`deleting....${foundIndex}`);

    }

}

