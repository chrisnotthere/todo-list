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




    //// NAV projects 
    const projects = document.createElement('ul'); 
    projects.id = 'projects';

    // const projectTitle = document.createElement('li');
    // projectTitle.innerText = 'Projects';
    // projectTitle.id = 'projectTitle';
    // projectTitle.classList.add('noHover');


    let projectCounter = 0;
    // projects.appendChild(projectTitle);
    projects.appendChild(createProject('Project 1'));
    projects.appendChild(createProject('school project'));
    projects.appendChild(createProject('job search'));
    projects.appendChild(createProject('study for test'));

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
    //nav.appendChild(projectTitle);
    nav.appendChild(projects);
    nav.appendChild(addProjectUL)


    function createProject(title){
        // const selectProject = document.querySelector(`#${title}Project`);
        
        // project 1
        const project = document.createElement('li');
        project.id = projectCounter;
        const projectDiv = document.createElement('div');
        //projectDiv.id = projectCounter;
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
    
        // projectTitle.addEventListener('click', () => alert(title));
        projectTitle.addEventListener('click', () => alert(project.id));
    
        projectDeleteDiv.addEventListener('click', () => alert(`delete "${title}" project!`));
        // projectDeleteDiv.addEventListener('click', () => alert(document.querySelector(`#${title}Project`)));
    
        projectCounter++;
        return project;
    
    }

    return nav;
}

function createMain(){

    const main = document.createElement('main');
    main.id = 'main';

    main.appendChild(createNav());
    main.appendChild(createInbox());

    return main;
}

export function loadMain(){

    document.body.appendChild(createMain());
    //addEventListeners();
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
        todoCounter++;
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
    
        return todo;
    }



    return article;
}

export function loadArticle(){

    document.body.appendChild(createArticle());

}



