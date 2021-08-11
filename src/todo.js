export default class Todo{

    constructor (name, description, dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }

    setName(name){
        this.name = name;
    }

    getName(name){
        return this.name;
    }

    setDescription(description){
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

    getDateFormatted() {
        const day = this.dueDate.split('-')[2]
        const month = this.dueDate.split('-')[1]
        const year = this.dueDate.split('-')[0]
        return `${month}/${day}/${year}`
    }

    setIscomplete(bool){
        this.isComplete = bool;
    }

    getIsComplete(){
        return this.isComplete;
    }
}
