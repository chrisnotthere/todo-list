
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    // const logo = new Image();
    // logo.src = Icon;
    // logo.style.width = '100px';
    // header.appendChild(logo);

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

