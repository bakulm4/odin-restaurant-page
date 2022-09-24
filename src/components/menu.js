const menuArray = [{'home':'#home'},{'menu':'#menu'},{'about':'#about'},{'contact':'#contact'}];
const querySelector = menuArray.map(menu=>Object.values(menu)[0]).join(', ');
const menuItems= [];

export default function menu(){

    const menuElement = document.createElement('ul');

    menuArray.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = Object.keys(item)[0];
        menuItem.classList.add(`${Object.keys(item)[0]}-nav`,'btn' );

        menuElement.appendChild(menuItem);
        menuItems.push(menuItem);
    });

    menuElement.classList.add('menu');

    return menuElement;
}

function addEventListeners(){
    const pageList = document.querySelectorAll(querySelector);
    menuItems.forEach(item=>{
        item.addEventListener('click',(event)=>{
            handleClick(event,pageList);
        });
    });
}

function handleClick(event,pages){
    const targetId = event.target.classList.item(0).slice(0,-4);
    const pageElement = document.querySelector(`#${targetId}`);

    pages.forEach(page =>{
        page.removeAttribute('style');
        if(page.getAttribute('id')!== targetId )   
            page.setAttribute('style','display:none');
    });
}

export {menu,addEventListeners}