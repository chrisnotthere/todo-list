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


    controls.appendChild(inbox);
    controls.appendChild(today);
    controls.appendChild(thisWeek);


    //// NAV projects 
    const projects = document.createElement('ul'); 
    projects.id = 'projects';
    const projectTitle = document.createElement('li');
    projectTitle.innerText = 'Projects';
    projectTitle.id = 'projectTitle';
    projectTitle.classList.add('noHover');

    // project 1
    const project1 = document.createElement('li');
    project1.id = 'project1';
    const project1Div = document.createElement('div');
    project1Div.id = 'project1';
    const project1Icon = document.createElement('i');
    project1Icon.classList.add('fas', 'fa-tasks');
    project1Icon.id = 'project1Icon';
    const project1Title = document.createElement('div');
    project1Title.id = 'project1Title';
    project1Title.innerText = 'Project 1';
    const project1Delete = document.createElement('i');
    project1Delete.classList.add('far', 'fa-times-circle');
    project1Delete.id = 'project1Delete';

    project1.appendChild(project1Icon);
    project1.appendChild(project1Title);
    project1.appendChild(project1Delete);

    project1Title.addEventListener('click', () => alert('project 1 ...'));


    // project 2
    const project2 = document.createElement('li');
    project2.id = 'project2';
    const project2Div = document.createElement('div');
    project2Div.id = 'project2';
    const project2Icon = document.createElement('i');
    project2Icon.classList.add('fas', 'fa-tasks');
    project2Icon.id = 'project2Icon';
    const project2Title = document.createElement('div');
    project2Title.id = 'project2Title';
    project2Title.innerText = 'Project 2';
    const project2Delete = document.createElement('i');
    project2Delete.classList.add('far', 'fa-times-circle');
    project2Delete.id = 'project2Delete';

    project2.appendChild(project2Icon);
    project2.appendChild(project2Title);
    project2.appendChild(project2Delete);

    project2Title.addEventListener('click', () => alert('project 2 ...'));



    projects.appendChild(projectTitle);
    projects.appendChild(project1);
    projects.appendChild(project2);

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

    //// TODO header
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

    //// main content TODO list items
    const todoDisplay = document.createElement('ul'); 
    todoDisplay.id = 'todoDisplay';

    // todo1
    //checkbox btn
    const todo1 = document.createElement('li');
    todo1.classList.add('userTask');
    const todo1CheckboxDiv = document.createElement('div');
    todo1CheckboxDiv.id = 'todo1CheckboxDiv';
    const todo1Checkbox = document.createElement('i');
    todo1Checkbox.classList.add('far', 'fa-square');
    todo1Checkbox.id = 'todo1Checkbox';
    //edit btn
    const todo1EditDiv = document.createElement('div');
    todo1EditDiv.id = 'todo1EditDiv';
    const todo1Edit = document.createElement('i');
    todo1Edit.classList.add('far', 'fa-edit');
    todo1Edit.id = 'todo1Edit';
    //delete btn
    const todo1DeleteDiv = document.createElement('div');
    todo1DeleteDiv.id = 'todo1DeleteDiv';
    const todo1Delete = document.createElement('i');
    todo1Delete.classList.add('far', 'fa-trash-alt');
    todo1Delete.id = 'todo1Delete';
    //description
    const todoDescription = document.createElement('div');
    todoDescription.innerText = 'todo1';
    todoDescription.classList.add('todoDecription');
    //due date
    const todoDueDate = document.createElement('div');
    todoDueDate.innerText = '08-10-2021';
    todoDueDate.classList.add('todoDueDate');
    todo1CheckboxDiv.appendChild(todo1Checkbox);
    todo1.appendChild(todo1CheckboxDiv);
    todo1.appendChild(todoDescription);
    todo1EditDiv.appendChild(todo1Edit);
    todo1.appendChild(todo1EditDiv);
    todo1DeleteDiv.appendChild(todo1Delete);
    todo1.appendChild(todo1DeleteDiv);
    todo1.appendChild(todoDueDate);

    todoDescription.addEventListener('click', () => alert('todo 1 task details'));
    todo1CheckboxDiv.addEventListener('click', () => alert('cross out the todo'));
    todo1EditDiv.addEventListener('click', () => alert('edit details of todo'));
    todo1DeleteDiv.addEventListener('click', () => alert('delete this todo'));

    //todo1Checkbox.onclick = function (){alert('cross out this todo')};

    // todo2
    const todo2 = document.createElement('li');
    todo2.classList.add('userTask');
    const todo2Icon = document.createElement('i');
    todo2Icon.classList.add('far', 'fa-check-square');
    todo2Icon.id = 'todo2Icon';
    //edit and delete btns
    const todo2Edit = document.createElement('i');
    todo2Edit.classList.add('far', 'fa-edit');
    todo2Edit.id = 'todo1Edit';
    const todo2Delete = document.createElement('i');
    todo2Delete.classList.add('far', 'fa-trash-alt');
    todo2Delete.id = 'todo2Delete';
    const todoDescription2 = document.createElement('div');
    todoDescription2.innerText = 'todo2';
    todoDescription2.classList.add('todoDecription');
    const todoDueDate2 = document.createElement('div');
    todoDueDate2.innerText = '08-12-2021';
    todoDueDate2.classList.add('todoDueDate');
    todo2.appendChild(todo2Icon);
    todo2.appendChild(todoDescription2);
    todo2.appendChild(todo2Edit);
    todo2.appendChild(todo2Delete);
    todo2.appendChild(todoDueDate2);

    // todo3
    const todo3 = document.createElement('li');
    todo3.classList.add('userTask');
    const todo3Icon = document.createElement('i');
    todo3Icon.classList.add('far', 'fa-square');
    todo3Icon.id = 'todo3Icon';
    //edit and delete btns
    const todo3Edit = document.createElement('i');
    todo3Edit.classList.add('far', 'fa-edit');
    todo3Edit.id = 'todo1Edit';
    const todo3Delete = document.createElement('i');
    todo3Delete.classList.add('far', 'fa-trash-alt');
    todo3Delete.id = 'todo3Delete';
    const todoDescription3 = document.createElement('div');
    todoDescription3.innerText = 'todo3';
    todoDescription3.classList.add('todoDecription');
    const todoDueDate3 = document.createElement('div');
    todoDueDate3.innerText = '08-17-2021';
    todoDueDate3.classList.add('todoDueDate');
    todo3.appendChild(todo3Icon);
    todo3.appendChild(todoDescription3);
    todo3.appendChild(todo3Edit);
    todo3.appendChild(todo3Delete);
    todo3.appendChild(todoDueDate3);



    // example todos
    const todo4 = document.createElement('li');
    todo4.innerText = 'todo4';
    const todo5 = document.createElement('li');
    todo5.innerText = 'todo5';
    const todo6 = document.createElement('li');
    todo6.innerText = 'todo6';

    todoDisplay.appendChild(todo1);
    todoDisplay.appendChild(todo2);
    todoDisplay.appendChild(todo3);
    todoDisplay.appendChild(todo4);
    todoDisplay.appendChild(todo5);
    todoDisplay.appendChild(todo6);

    // Add new TODO task option
    const addLogo = document.createElement('i');
    addLogo.classList.add('fas', 'fa-plus', 'fa');
    addLogo.id = 'addLogo';
    const addTaskUL = document.createElement('ul'); 
    addTaskUL.id = 'addTaskUL';
    const addTask = document.createElement('li');
    addTask.id = 'addTask';
    const addTaskDescription = document.createElement('div'); 
    addTaskDescription.innerText = 'Add Task';

    addTask.appendChild(addLogo);
    addTask.appendChild(addTaskDescription);
    addTaskUL.appendChild(addTask);

    content.appendChild(todoTitleUL)
    content.appendChild(todoDisplay);
    article.appendChild(content);
    content.appendChild(addTaskUL);

    return article;
}

export function loadArticle(){

    document.body.appendChild(createArticle());

}

// function addEventListeners(){

//     const inbox = document.querySelector('#inbox');
//     inbox.addEventListener('click', () => alert('inbox'));

//     const today = document.querySelector('#today');
//     today.addEventListener('click', () => alert('today'));

//     const thisWeek = document.querySelector('#thisWeek');
//     thisWeek.addEventListener('click', () => alert('thisWeek'));

// }

