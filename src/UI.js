import Project from './project';
import Todo from './todo';
import ProjectList from './projectList'

////test project/todos
let allProjectsList = new ProjectList('allProjectsList');

export let testProject = new Project('example project');
let testProject2 = new Project('job search');
let testProject3 = new Project('study for test');

let testTodo1 = new Todo('testTodo', 'do this and that and that', 'tomorrow');
let testTodo2 = new Todo('another todo', 'description', '08-08-2021');
let testTodo3 = new Todo('example 3', 'blahblahblah', '08--15-2021');
let testTodo4 = new Todo('build resume', 'do this and that and that', 'tomorrow');
let testTodo5 = new Todo('cold call companies', 'description', '08-08-2021');
let testTodo6 = new Todo('ask around for job openings', 'blahblahblah', '08--15-2021');
let testTodo7 = new Todo('make flash cards', 'do this and that and that', 'tomorrow');
let testTodo8 = new Todo('get extra stong coffee', 'description', '08-08-2021');
let testTodo9 = new Todo('study all night', 'blahblahblah', '08--15-2021');

testProject.addTodo(testTodo1);
testProject.addTodo(testTodo2);
testProject.addTodo(testTodo3);
testProject2.addTodo(testTodo4);
testProject2.addTodo(testTodo5);
testProject2.addTodo(testTodo6);
testProject3.addTodo(testTodo7);
testProject3.addTodo(testTodo8);
testProject3.addTodo(testTodo9);

allProjectsList.addProject(testProject);
allProjectsList.addProject(testProject2);
allProjectsList.addProject(testProject3);

console.log(allProjectsList);
////


function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('i');
    logo.classList.add('fas', 'fa-clipboard-list', 'fa-5x');
    logo.id = 'logo';
    logo.width = '200px';
    header.appendChild(logo);

    const titleDiv = document.createElement('div');
    titleDiv.id = 'title';
    titleDiv.innerText = 'ToDo List';
    header.appendChild(titleDiv);

    return header;
    }

export function loadHeader(){
    document.body.appendChild(createHeader());

}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    div1.innerHTML = 'ToDo List app &#9400; 2021';
    div2.textContent = 'created by chrisnotthere (github link)';
    footer.appendChild(div1);
    footer.appendChild(div2);

    return footer
}

export function loadFooter(){
    document.body.appendChild(createFooter());
}


function createNav(){
    const nav = document.createElement('nav');
    nav.id = 'nav';

    //// NAV controls
    const controls = document.createElement('ul'); 
    controls.id = 'controls';
    // inbox
    const inbox = document.createElement('li');
    inbox.id = 'inbox';
    const inboxDiv = document.createElement('div');
    inboxDiv.id = 'inboxDiv';
    const inboxIcon = document.createElement('i');
    inboxIcon.classList.add('fas', 'fa-inbox');
    inboxIcon.id = 'inboxIcon';
    const inboxTitle = document.createElement('div');
    inboxTitle.id = 'inboxTitle';
    inboxTitle.innerText = 'Inbox';
    inbox.appendChild(inboxIcon);
    inbox.appendChild(inboxTitle);

    inbox.addEventListener('click', () => alert('inbox'));

    // today
    const today = document.createElement('li');
    today.id = 'today';
    const todayDiv = document.createElement('div');
    todayDiv.id = 'todayDiv';
    const todayIcon = document.createElement('i');
    todayIcon.classList.add('fas', 'fa-calendar-day');
    todayIcon.id = 'todayIcon';
    const todayTitle = document.createElement('div');
    todayTitle.id = 'todayTitle';
    todayTitle.innerText = 'Today';
    today.appendChild(todayIcon);
    today.appendChild(todayTitle);

    today.addEventListener('click', () => alert('today'));

    // this week
    const thisWeek = document.createElement('li');
    thisWeek.id = 'thisWeek';
    const thisWeekDiv = document.createElement('div');
    thisWeekDiv.id = 'thisWeek';
    const thisWeekIcon = document.createElement('i');
    thisWeekIcon.classList.add('fas', 'fa-calendar');
    thisWeekIcon.id = 'thisWeekIcon';
    const thisWeekTitle = document.createElement('div');
    thisWeekTitle.id = 'thisWeek';
    thisWeekTitle.innerText = 'This Week';
    thisWeek.appendChild(thisWeekIcon);
    thisWeek.appendChild(thisWeekTitle);

    thisWeek.addEventListener('click', () => alert('thisWeek'));

    // projects title
    const projectTitle = document.createElement('li');
    projectTitle.innerText = 'Projects';
    projectTitle.id = 'projectTitle';
    projectTitle.classList.add('noHover');

    controls.appendChild(inbox);
    controls.appendChild(today);
    controls.appendChild(thisWeek);
    controls.appendChild(projectTitle);

    ////  projects 
    const projects = document.createElement('ul'); 
    projects.id = 'projects';

    let projectCounter = 0;
    // projects.appendChild(projectTitle);


    projects.appendChild(createProject(allProjectsList.getProjects()[0].getName()));
    projects.appendChild(createProject(allProjectsList.getProjects()[1].getName()));
    projects.appendChild(createProject(allProjectsList.getProjects()[2].getName()));

    const projectList = document.querySelector('#projects')

    //add new project button
    const addProjectLogo = document.createElement('i');
    addProjectLogo.classList.add('fas', 'fa-plus', 'fa');
    addProjectLogo.id = 'addProjectIcon';
    const addProjectUL = document.createElement('ul'); 
    addProjectUL.id = 'addProjectUL';
    const addProject = document.createElement('li');
    addProject.id = 'addProject';
    const addProjectDescription = document.createElement('div'); 
    addProjectDescription.innerText = 'Add Project';

    addProject.appendChild(addProjectLogo);
    addProject.appendChild(addProjectDescription);
    addProjectUL.appendChild(addProject);

    addProject.addEventListener('click', () => alert('adding new project ...'));

    nav.appendChild(controls);
    nav.appendChild(projects);
    nav.appendChild(addProjectUL)


    function createProject(title){
        const project = document.createElement('li');
        project.id = projectCounter;
        const projectDiv = document.createElement('div');
        const projectIconDiv = document.createElement('div');
        projectIconDiv.id = 'projectIconDiv';
        const projectIcon = document.createElement('i');
        projectIcon.classList.add('fas', 'fa-tasks');
        projectIcon.id = 'projectIcon';
        const projectTitle = document.createElement('div');
        projectTitle.id = 'projectTitle';
        projectTitle.innerText = title;
        const projectDeleteDiv = document.createElement('div');
        projectDeleteDiv.id = 'projectDeleteDiv';
        const projectDelete = document.createElement('i');
        projectDelete.classList.add('far', 'fa-times-circle');
        projectDelete.id = 'projectDelete';
    
        project.appendChild(projectIconDiv);
        projectIconDiv.appendChild(projectIcon);
        project.appendChild(projectTitle);
        project.appendChild(projectDeleteDiv);
        projectDeleteDiv.appendChild(projectDelete);
    
        //projectTitle.addEventListener('click', () => alert(project.id));
        projectTitle.addEventListener('click', () => loadMain(testProject2));



        projectDeleteDiv.addEventListener('click', () => alert(`delete "${title}" project!`));
    
        projectCounter++;
        return project;
    }

    return nav;
}

// function createMain(project){
//     const main = document.createElement('main');
//     main.id = 'main';

//     main.appendChild(createNav());
//     //main.appendChild(createInbox());
//     main.appendChild(createProject(project));
//     //alert(testProject.getName());

//     return main;
// }


function createMain(project){
    const main = document.createElement('main');
    main.id = 'main';

    main.appendChild(createNav());
    main.appendChild(createProject(project));

    return main;
}

export function loadMain(project){
    //document.body.innerHTML = '';

    createHeader();

    //const main = document.getElementById('main');
    // main.innerHTML = '';
    //article.innerHTML = '';

    document.body.appendChild(createMain(project));
}

function createInbox(){
    const article = document.createElement('article');
    article.id = 'article';

    const content = document.createElement('div');
    content.id = 'content';

    //// inbox content header
    const todoTitleUL = document.createElement('ul');
    todoTitleUL.id = 'todoTitleUL';
    const todoTitle = document.createElement('div');
    todoTitle.innerText = 'Inbox';
    todoTitle.id = 'todoTitle';
    const todoTitleSort = document.createElement('div');
    todoTitleSort.innerText = 'Due Date';
    todoTitleSort.id = 'todoTitleSort';
    todoTitleUL.appendChild(todoTitle);
    todoTitleUL.appendChild(todoTitleSort);

    todoTitleSort.addEventListener('click', () => alert('sort the todo list by date'));

    // main content TODO list items
    const todoDisplay = document.createElement('ul'); 
    todoDisplay.id = 'todoDisplay';
    let todoCounter = 0;
    todoDisplay.appendChild(createTodo('test todo', 'this is a description, blah blah', '08-05-2021'));
    todoDisplay.appendChild(createTodo('todo2', 'blah blah', '08-08-2021'));
    todoDisplay.appendChild(createTodo('laundry', 'washing and folding', '08-11-2021'));
    todoDisplay.appendChild(createTodo('feed cats', 'very important!!', 'every day'));

    // Add task btn
    const addLogoDiv = document.createElement('div');
    addLogoDiv.id = 'addLogoDiv';
    const addLogo = document.createElement('i');
    addLogo.classList.add('fas', 'fa-plus', 'fa');
    addLogo.id = 'addLogo';
    const addTaskUL = document.createElement('ul'); 
    addTaskUL.id = 'addTaskUL';
    const addTask = document.createElement('li');
    addTask.id = 'addTask';
    const addTaskDescription = document.createElement('div'); 
    addTaskDescription.innerText = 'Add Task';
    addLogoDiv.appendChild(addLogo);
    addTask.appendChild(addLogoDiv);
    addTask.appendChild(addTaskDescription);
    addTaskUL.appendChild(addTask);

    content.appendChild(todoTitleUL)
    content.appendChild(todoDisplay);
    article.appendChild(content);
    content.appendChild(addTaskUL);


    function createTodo(title, description, dueDate){
        //checkbox btn
        const todo = document.createElement('li');
        todo.classList.add('userTask');
        todo.id = todoCounter;
        const todoCheckboxDiv = document.createElement('div');
        todoCheckboxDiv.id = 'todoCheckboxDiv';
        const todoCheckbox = document.createElement('i');
        todoCheckbox.classList.add('far', 'fa-square');
        todoCheckbox.id = 'todoCheckbox';
        //edit btn
        const todoEditDiv = document.createElement('div');
        todoEditDiv.id = 'todoEditDiv';
        const todoEdit = document.createElement('i');
        todoEdit.classList.add('far', 'fa-edit');
        todoEdit.id = 'todoEdit';
        //delete btn
        const todoDeleteDiv = document.createElement('div');
        todoDeleteDiv.id = 'todoDeleteDiv';
        const todoDelete = document.createElement('i');
        todoDelete.classList.add('far', 'fa-trash-alt');
        todoDelete.id = 'todoDelete';
        //description
        const todoDescription = document.createElement('div');
        todoDescription.innerText = title;
        todoDescription.classList.add('todoDecription');
        //due date
        const todoDueDate = document.createElement('div');
        todoDueDate.innerText = dueDate;
        todoDueDate.classList.add('todoDueDate');
    
        todoCheckboxDiv.appendChild(todoCheckbox);
        todo.appendChild(todoCheckboxDiv);
        todo.appendChild(todoDescription);
        todoEditDiv.appendChild(todoEdit);
        todo.appendChild(todoEditDiv);
        todoDeleteDiv.appendChild(todoDelete);
        todo.appendChild(todoDeleteDiv);
        todo.appendChild(todoDueDate);
    
        todoDescription.addEventListener('click', () => alert(description));
        todoCheckboxDiv.addEventListener('click', () => alert('cross out the todo'));
        todoEditDiv.addEventListener('click', () => alert('edit details of todo'));
        todoDeleteDiv.addEventListener('click', () => alert('delete this todo'));
    
        todoCounter++;
        return todo;
    }

    return article;
}

function createProject(project){

    //console.log(project);

    const article = document.createElement('article');
    article.id = 'article';

    const content = document.createElement('div');
    content.id = 'content';

    //// project content header
    const todoTitleUL = document.createElement('ul');
    todoTitleUL.id = 'todoTitleUL';
    const todoTitle = document.createElement('div');
    todoTitle.innerText = project.getName();
    todoTitle.id = 'todoTitle';
    const todoTitleSort = document.createElement('div');
    todoTitleSort.innerText = 'Due Date';
    todoTitleSort.id = 'todoTitleSort';
    todoTitleUL.appendChild(todoTitle);
    todoTitleUL.appendChild(todoTitleSort);

    todoTitleSort.addEventListener('click', () => alert('sort the todo list by date'));
///////////////////////////////////////////////////////////////////////////////////////
    // main content TODO list items
    const todoDisplay = document.createElement('ul'); 
    todoDisplay.id = 'todoDisplay';
    let todoCounter = 0;

    todoDisplay.appendChild(createTodo(project.getTodos()[0].getName(), project.getTodos()[0].getDescription(), project.getTodos()[0].getDueDate()));
    todoDisplay.appendChild(createTodo(project.getTodos()[1].getName(), project.getTodos()[1].getDescription(), project.getTodos()[1].getDueDate()));
    todoDisplay.appendChild(createTodo(project.getTodos()[2].getName(), project.getTodos()[2].getDescription(), project.getTodos()[2].getDueDate()));

    // Add task btn
    const addLogoDiv = document.createElement('div');
    addLogoDiv.id = 'addLogoDiv';
    const addLogo = document.createElement('i');
    addLogo.classList.add('fas', 'fa-plus', 'fa');
    addLogo.id = 'addLogo';
    const addTaskUL = document.createElement('ul'); 
    addTaskUL.id = 'addTaskUL';
    const addTask = document.createElement('li');
    addTask.id = 'addTask';
    const addTaskDescription = document.createElement('div'); 
    addTaskDescription.innerText = 'Add Task';
    addLogoDiv.appendChild(addLogo);
    addTask.appendChild(addLogoDiv);
    addTask.appendChild(addTaskDescription);
    addTaskUL.appendChild(addTask);

    content.appendChild(todoTitleUL)
    content.appendChild(todoDisplay);
    article.appendChild(content);
    content.appendChild(addTaskUL);


    function createTodo(title, description, dueDate){
        //checkbox btn
        const todo = document.createElement('li');
        todo.classList.add('userTask');
        todo.id = todoCounter;
        const todoCheckboxDiv = document.createElement('div');
        todoCheckboxDiv.id = 'todoCheckboxDiv';
        const todoCheckbox = document.createElement('i');
        todoCheckbox.classList.add('far', 'fa-square');
        todoCheckbox.id = 'todoCheckbox';
        //edit btn
        const todoEditDiv = document.createElement('div');
        todoEditDiv.id = 'todoEditDiv';
        const todoEdit = document.createElement('i');
        todoEdit.classList.add('far', 'fa-edit');
        todoEdit.id = 'todoEdit';
        //delete btn
        const todoDeleteDiv = document.createElement('div');
        todoDeleteDiv.id = 'todoDeleteDiv';
        const todoDelete = document.createElement('i');
        todoDelete.classList.add('far', 'fa-trash-alt');
        todoDelete.id = 'todoDelete';
        //description
        const todoDescription = document.createElement('div');
        todoDescription.innerText = title;
        todoDescription.classList.add('todoDecription');
        //due date
        const todoDueDate = document.createElement('div');
        todoDueDate.innerText = dueDate;
        todoDueDate.classList.add('todoDueDate');
    
        todoCheckboxDiv.appendChild(todoCheckbox);
        todo.appendChild(todoCheckboxDiv);
        todo.appendChild(todoDescription);
        todoEditDiv.appendChild(todoEdit);
        todo.appendChild(todoEditDiv);
        todoDeleteDiv.appendChild(todoDelete);
        todo.appendChild(todoDeleteDiv);
        todo.appendChild(todoDueDate);
    
        todoDescription.addEventListener('click', () => alert(description));
        todoCheckboxDiv.addEventListener('click', () => alert('cross out the todo'));
        todoEditDiv.addEventListener('click', () => alert('edit details of todo'));
        todoDeleteDiv.addEventListener('click', () => alert('delete this todo'));
    
        todoCounter++;
        return todo;
    }


    return article
}

export function loadArticle(){

    document.body.appendChild(createArticle());

}

