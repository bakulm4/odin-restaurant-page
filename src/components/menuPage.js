import menuData from '../data/menuData.json';

const menuHeadersArray = [];
const menuContentsArray = [];

export default function menuPage() {
    const menuPageElement = document.createElement('div');
    const menuPageTitle = document.createElement('h1');
    const menuPageNav = getMenuPageNav();
    const menuPageContents = getMenuContents();
    menuPageElement.setAttribute('id','menu');
    menuPageElement.classList.add('menu-page');
    menuPageElement.setAttribute('style','display:none');
    menuPageTitle.innerHTML='The Menu';
    menuPageTitle.classList.add('menu-page-title');

    menuPageElement.append(menuPageTitle,menuPageNav,...menuPageContents);

    return menuPageElement;
}

function getMenuPageNav(){
    const menuPageNav = document.createElement('ul');

    menuData.menuItems.forEach((item,index)=> {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = Object.keys(item)[0];
        menuItem.classList.add(`${Object.keys(item)[0].toLowerCase()}-nav`,'menu-header','btn');
        if(index===0)
            menuItem.classList.add('red');
        
        menuHeadersArray.push(menuItem);
        menuItem.addEventListener('click',handleClick);
        menuPageNav.appendChild(menuItem);
    });

    menuPageNav.classList.add('menu-page-nav');
    return menuPageNav;
}

function getMenuContents(){
  
    const menuItemsArray = menuData.menuItemsData.reduce((result,item,index)=>{
        const menuContentContainer = document.createElement('div');
        menuContentContainer.classList.add('menu-contents');
        menuContentContainer.setAttribute('id',Object.keys(item)[0].toLowerCase())
        if(index!==0)
            menuContentContainer.setAttribute('style','display:none');

        const menuItems = Object.values(item)[0];
        menuItems.forEach((item,index)=>{
            const menuItemElement = document.createElement('h1');
            menuItemElement.classList.add('menu-item');
            const menuItemName = document.createElement('b');
            menuItemName.innerHTML=item.name;
            menuItemElement.appendChild(menuItemName);
            if(Object.hasOwn(item,'tag')){
                const menuItemTag = document.createElement('span');
                menuItemTag.classList.add('tag', item.tag[0]);
                menuItemTag.innerHTML=item.tag[1];
                menuItemElement.appendChild(menuItemTag);
            };
            const menuItemPrice = document.createElement('span');
            menuItemPrice.classList.add('price');
            menuItemPrice.innerHTML=item.price;
            menuItemElement.appendChild(menuItemPrice);
            menuContentContainer.appendChild(menuItemElement);

            const menuItemDescription = document.createElement('p');
            menuItemDescription.classList.add('menu-item-description');
            menuItemDescription.innerHTML = item.description;
            menuContentContainer.appendChild(menuItemDescription);

            if(index<menuItems.length-1){
                menuContentContainer.appendChild(document.createElement('hr'));
            }
        });
        menuContentsArray.push(menuContentContainer);
        return result.concat(menuContentContainer);
    },[]);

    return menuItemsArray;
}

function handleClick(event){
    const targetId = event.target.classList.item(0).slice(0,-4);
    const pageElement = document.querySelector(`#${targetId}`);

    menuHeadersArray.forEach(header =>{
         header.classList.remove('red');
         if(header.classList.item(0).slice(0,-4)=== targetId){
            header.classList.add('red');
         }  
    });

    menuContentsArray.forEach(content =>{
          content.removeAttribute('style');
        if(content.getAttribute('id')!== targetId)   
            content.setAttribute('style','display:none');
    });
}
