function createNav(){

    const nav = document.createElement('nav');
    nav.id = 'nav';

    // NAV controls
    const controls = document.createElement('ul'); 
    controls.id = 'controls';
    const inbox = document.createElement('li');
    inbox.innerText = 'Inbox';
    const today = document.createElement('li');
    today.innerText = 'Today';
    const thisWeek = document.createElement('li');
    thisWeek.innerText = 'This Week';

    controls.appendChild(inbox);
    controls.appendChild(today);
    controls.appendChild(thisWeek);

    // NAV projects 
    const projects = document.createElement('ul'); 
    projects.id = 'projects';
    const projectTitle = document.createElement('li');
    projectTitle.innerText = 'Projects';
    projectTitle.id = 'projectTitle';
    projectTitle.classList.add('noHover');
    const project1 = document.createElement('li');
    project1.innerText = 'Project 1';
    const project2 = document.createElement('li');
    project2.innerText = 'Project 2';

    projects.appendChild(projectTitle);
    projects.appendChild(project1);
    projects.appendChild(project2);


    nav.appendChild(controls);
    nav.appendChild(projects);

    return nav;
}

export function loadNav(){

    document.body.appendChild(createNav());

}

function createMain(){

    const main = document.createElement('main');
    main.id = 'main';

    main.appendChild(createNav());
    main.appendChild(createArticle());

    return main;

}

export function loadMain(){

    document.body.appendChild(createMain());


}

function createArticle(){

    const article = document.createElement('article');
    article.id = 'article';

    const content = document.createElement('div');
    content.id = 'content';

    // TODO header
    const todoTitleUL = document.createElement('ul');
    todoTitleUL.id = 'todoTitleUL';
    const todoTitle = document.createElement('div');
    todoTitle.innerText = 'Inbox';
    todoTitle.id = 'todoTitle';
    const todoTitleSort = document.createElement('div');
    todoTitleSort.innerText = 'Due Date ...';
    todoTitleSort.id = 'todoTitleSort';
    todoTitleUL.appendChild(todoTitle);
    todoTitleUL.appendChild(todoTitleSort);

    // main content TODO list items
    const todoDisplay = document.createElement('ul'); 
    todoDisplay.id = 'todoDisplay';

    const todo1 = document.createElement('li');
    todo1.classList.add('userTask');
    const todoDescription = document.createElement('div');
    todoDescription.innerText = 'todo1';
    todoDescription.classList.add('todoDecription');
    const todoDueDate = document.createElement('div');
    todoDueDate.innerText = '08-10-2021';
    todoDueDate.classList.add('todoDueDate');
    todo1.appendChild(todoDescription);
    todo1.appendChild(todoDueDate);

    const todo2 = document.createElement('li');
    todo2.classList.add('userTask');
    const todoDescription2 = document.createElement('div');
    todoDescription2.innerText = 'todo2';
    todoDescription2.classList.add('todoDecription');
    const todoDueDate2 = document.createElement('div');
    todoDueDate2.innerText = '08-12-2021';
    todoDueDate2.classList.add('todoDueDate');
    todo2.appendChild(todoDescription2);
    todo2.appendChild(todoDueDate2);

    const todo3 = document.createElement('li');
    todo3.classList.add('userTask');
    const todoDescription3 = document.createElement('div');
    todoDescription3.innerText = 'todo3';
    todoDescription3.classList.add('todoDecription');
    const todoDueDate3 = document.createElement('div');
    todoDueDate3.innerText = '08-17-2021';
    todoDueDate3.classList.add('todoDueDate');
    todo3.appendChild(todoDescription3);
    todo3.appendChild(todoDueDate3);



    // const todo2 = document.createElement('li');
    // todo2.innerText = 'todo2';
    // const todo3 = document.createElement('li');
    // todo3.innerText = 'todo3';
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

