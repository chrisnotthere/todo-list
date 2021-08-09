import Project from './project';
import Todo from './todo';
import ProjectList from './projectList'

////test project/todos
let allProjectsList = new ProjectList('allProjectsList');

export let testProject = new Project('example project');
let testProject2 = new Project('job search');
let testProject3 = new Project('study for final');

let inboxProject = new Project('Inbox');

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

    //foreach project in projectList, append to 'projects' nav ul
    allProjectsList.getProjects().forEach(element => {
        projects.appendChild(createProject(element.getName()));
    });

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

    //bring up add project form when 'add project' is clicked
    addProject.addEventListener('click', () => {
        projects.appendChild(newProjectFrom())
    });

    function newProjectFrom(){
        addProject.classList.add('hide');
        
        const projectForm = document.createElement('form');
        projectForm.id = 'projectForm';

        const projectTitleForm = document.createElement('textArea');
        projectTitleForm.id = 'todoTitleForm';
        projectTitleForm.placeholder = 'Project title: ';
        projectTitleForm.required = true;

        const projectFormBtns = document.createElement('div');
        projectFormBtns.id = 'projectFormBtns';

        const acceptProjectIconDiv = document.createElement('i');
        acceptProjectIconDiv.id = 'acceptProjectIconDiv';
        const acceptIcon = document.createElement('i');
        acceptIcon.classList.add('fas', 'fa-check', 'fa-2x');
        acceptProjectIconDiv.id = 'acceptProjectIconDiv';
        acceptProjectIconDiv.appendChild(acceptIcon);

        const cancelProjectIconDiv = document.createElement('i');
        cancelProjectIconDiv.id = 'cancelProjectIconDiv';
        const cancelProjectIcon = document.createElement('i');
        cancelProjectIcon.classList.add('fas', 'fa-times', 'fa-2x');
        cancelProjectIcon.id = 'cancelIcon';
        cancelProjectIconDiv.appendChild(cancelProjectIcon);

        projectForm.appendChild(projectTitleForm);
        projectFormBtns.appendChild(acceptProjectIconDiv)
        projectFormBtns.appendChild(cancelProjectIconDiv)
        projectForm.appendChild(projectFormBtns);

        //create new project
        acceptProjectIconDiv.addEventListener('click', () => {
            let newProject = new Project(projectTitleForm.value, []);
            console.table(newProject);

            allProjectsList.addProject(newProject);
            console.table(allProjectsList);
            //UI-stuff
            refreshPage(newProject);
        });
        
        //cancel add todo when click cancel
        cancelProjectIconDiv.addEventListener('click', () => {
            projectForm.classList.add('hide');
            addProject.classList.remove('hide');
        });

        return projectForm;
    }


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
    
        // dynamically insert project into loadContent function
        let resultObject = allProjectsList.getProjects().find(o => o.name === title);

        //show project contents
        projectTitle.addEventListener('click', () => loadContent(resultObject));
        projectIconDiv.addEventListener('click', () => loadContent(resultObject));

        projectDeleteDiv.addEventListener('click', () => {
            //delete project and refresh the page...
            allProjectsList.deleteProject(title);
            refreshPage(inboxProject);
            console.log(allProjectsList);                   
        });

        projectCounter++;
        return project;
    }

    return nav;
}

function createMain(project){
    const main = document.createElement('main');
    main.id = 'main';
    main.appendChild(createNav());
    main.appendChild(createProject(project));
    return main;
}

function refreshPage(project){
    document.body.innerHTML = '';
    loadHeader();
    loadMain(project);
    loadFooter();
}

export function loadMain(project){
    document.body.appendChild(createMain(project));
}

function loadContent(project){
    //clear article
    const article = document.querySelector('#article');
    article.remove();
    //create new article, appeand it to main
    const main = document.querySelector('main');
    main.appendChild(createProject(project));

}


function createProject(project){
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

    // main content TODO list items
    const todoDisplay = document.createElement('ul'); 
    todoDisplay.id = 'todoDisplay';
    let todoCounter = 0;

    //get project todos and append to todoDisplay
    project.getTodos().forEach(element => {
        todoDisplay.appendChild(createTodo(element.getName(), element.getDescription(), element.getDueDate()));
    });

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

    //create form to get users new todo info
    addTask.addEventListener('click', () => {
        todoDisplay.appendChild(gatherTodoInfo());
        //alert('click');
    });

    content.appendChild(todoTitleUL)
    content.appendChild(todoDisplay);
    article.appendChild(content);
    content.appendChild(addTaskUL);
    //////////////////////////////////////////////////////////////////////////////////
    content.appendChild(showTodoDetails())
////////////////////////////////////////////////////////////////////////////////////////////
    function gatherTodoInfo(){
        addTask.classList.add('hide');
        
        const todoForm = document.createElement('form');
        todoForm.id = 'todoForm';

        const todoTitleForm = document.createElement('textArea');
        todoTitleForm.id = 'todoTitleForm';
        todoTitleForm.placeholder = 'Title: Laundry';
        todoTitleForm.required = true;

        const todoDescriptionForm = document.createElement('textArea');
        todoDescriptionForm.id = 'todoTitleForm';
        todoDescriptionForm.placeholder = 'Details: fold laundry at 4pm';
        todoDescriptionForm.required = true;

        const dueDateForm = document.createElement('textArea');
        dueDateForm.id = 'dueDateForm';
        dueDateForm.placeholder = '08-06-2021';
        dueDateForm.required = false;

        const formBtns = document.createElement('div');
        formBtns.id = 'formBtns';

        const acceptIconDiv = document.createElement('i');
        acceptIconDiv.id = 'acceptIconDiv';
        const acceptIcon = document.createElement('i');
        acceptIcon.classList.add('fas', 'fa-check', 'fa-2x');
        acceptIconDiv.id = 'acceptIconDiv';
        acceptIconDiv.appendChild(acceptIcon);

        const cancelIconDiv = document.createElement('i');
        cancelIconDiv.id = 'cancelIconDiv';
        const cancelIcon = document.createElement('i');
        cancelIcon.classList.add('fas', 'fa-times', 'fa-2x');
        cancelIcon.id = 'cancelIcon';
        cancelIconDiv.appendChild(cancelIcon);

        todoForm.appendChild(todoTitleForm);
        todoForm.appendChild(todoDescriptionForm);
        todoForm.appendChild(dueDateForm);
        formBtns.appendChild(acceptIconDiv)
        formBtns.appendChild(cancelIconDiv)
        todoForm.appendChild(formBtns);

        //add todo to the project when click accept
        acceptIconDiv.addEventListener('click', () => {
            //find current project, add todo to that project
            const currentProjectTitle = document.querySelector('#todoTitle');
            let currentProject = allProjectsList.getProjects().find(o => o.getName() === currentProjectTitle.innerText);

            let newTodo = new Todo(todoTitleForm.value, todoDescriptionForm.value, dueDateForm.value);
            currentProject.addTodo(newTodo);
            
            //UI-stuff
            todoForm.classList.add('hide');
            addTask.classList.remove('hide');
            todoDisplay.appendChild(createTodo(todoTitleForm.value, todoDescriptionForm.value, dueDateForm.value));
        });
        
        //cancel add todo when click cancel
        cancelIconDiv.addEventListener('click', () => {
            todoForm.classList.add('hide');
            addTask.classList.remove('hide');
        });

        return todoForm;
    }
////////////////////////////////////////////////////////////////////////////////////////////////////
    function showTodoDetails(todo){

        let todoDetailsModal = document.createElement('div');
        todoDetailsModal.classList.add('modal');
        todoDetailsModal.id = 'toDoDetailsModal';

        let todoDetailsModalContent = document.createElement('div');
        todoDetailsModalContent.classList.add('modal-content');

        let close = document.createElement('span');
        close.classList.add('close');
        close.innerHTML = '&times;';

        let content = document.createElement('p');
        content.innerText = 'this is a test, todo details will go in here';

        todoDetailsModalContent.appendChild(close);
        todoDetailsModalContent.appendChild(content);
        todoDetailsModal.appendChild(todoDetailsModalContent);

        close.onclick = function() {
            todoDetailsModal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == todoDetailsModal) {
                todoDetailsModal.style.display = "none";
                }
        }

        return todoDetailsModal;

    }
/////////////////////////////////////////////////////////////////////////////////////////////////
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
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //todoDescription.addEventListener('click', () => alert(description));
        todoDescription.addEventListener('click', () => {
            const toDoDetailsModal = document.getElementById('toDoDetailsModal');
            toDoDetailsModal.style.display = 'block';
        });





        todoCheckboxDiv.addEventListener('click', () => alert('cross out the todo'));
        todoEditDiv.addEventListener('click', () => alert('edit details of todo'));
        //delete todo btn
        todoDeleteDiv.addEventListener('click', () => deleteTodo(title));

        todoCounter++;
        return todo;
    }

    return article
}

export function loadArticle(){
    document.body.appendChild(createArticle());
}

function deleteTodo(todoTitle){
    //find current project
    const currentProjectTitle = document.querySelector('#todoTitle').innerText;
    let currentProject = allProjectsList.getProjects().find(o => o.getName() === currentProjectTitle);
    //remove todo from project
    currentProject.deleteTodo(todoTitle);
    //reload the page
    loadContent(currentProject);
}
