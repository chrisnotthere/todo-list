export default class Todo{

    constructor (name, description, dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }

    setName(name){
        this.name = name;
    }

    getName(name){
        return this.name;
    }

    setDecription(description){
        this.description = description;
    }

    getDescription(tidescriptiontle){
        return this.description;
    }
    
    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getDueDate(dueDate){
        return this.dueDate;
    }






}