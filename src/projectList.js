export default class ProjectList{

    constructor(name){
        this.name = name;
        this.projects = []
    }

    setName(name){
        this.name = name;
    }

    getName(name){
        return this.name;
    }

    setProjects(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }

    addProject(newProject){
        this.projects.push(newProject);
    }

    deleteProject(oldProject){
        this.projects = this.projects.filter((project) => project.name != oldProject);
    }
}
