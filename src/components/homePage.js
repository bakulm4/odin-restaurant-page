function homePage(){

    const homePageElement = document.createElement('div');
    const displayHoursElement =  document.createElement('div');
    const hoursTextElement = document.createElement('span');
    const homePageTextParentElement = document.createElement('div');
    const homePageTextElement = document.createElement('span');
    const seeMenuElement = document.createElement('button');

    seeMenuElement.innerHTML='Let me see the menu';
    seeMenuElement.classList.add('see-menu','btn');

    homePageTextElement.innerHTML=`thin<br>CRUST PIZZA`;
    homePageTextElement.classList.add('home-page-text');

    homePageTextParentElement.append(homePageTextElement,seeMenuElement);
    homePageTextParentElement.classList.add('home-page-text-container')

    hoursTextElement.innerHTML = 'Open from 10am to 12pm';
    hoursTextElement.classList.add('hours-text');

    displayHoursElement.classList.add('display-hours');
    displayHoursElement.appendChild(hoursTextElement);

    homePageElement.classList.add('home-page');
    homePageElement.setAttribute('id','home');
    homePageElement.append( displayHoursElement,homePageTextParentElement);

    return homePageElement;

}

function addEventListeners(){
    document.querySelector('.see-menu').addEventListener('click',()=>{
        document.querySelector('#home').setAttribute('style','display:none');
        document.querySelector('#menu').removeAttribute('style');
    });
}

export {homePage,addEventListeners};