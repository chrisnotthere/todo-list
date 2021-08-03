function createNav(){

    const nav = document.createElement('nav');
    nav.id = 'nav';

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

    nav.appendChild(controls);

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

    article.appendChild(content);

    return article;
}

export function loadArticle(){

    document.body.appendChild(createArticle());

}

