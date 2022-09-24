
import ChefImage from '../images/chef.jpeg';
import RestaurantImage from '../images/img_restaurant.jpeg';
export default function aboutPage(){

    const aboutPageContainer = document.createElement('div');
    aboutPageContainer.setAttribute('id','about');
    aboutPageContainer.classList.add('about-page');
    aboutPageContainer.setAttribute('style','display:none');

    const aboutPageTitle = document.createElement('h1');
    aboutPageTitle.innerHTML='About';
    aboutPageTitle.classList.add('about-title');

    const paraElement1 = document.createElement('p');
    paraElement1.innerHTML = `The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

    const chefDetailElement = document.createElement('p');
    chefDetailElement.classList.add('chef-details');

    const chefNameElement = document.createElement('span');
    chefNameElement.innerHTML=`<strong>The Chef?</strong> Mr. Italiano himself</span>`;

    const chefImageElement = new Image();
    chefImageElement.src= ChefImage;
    chefImageElement.classList.add('chef-image');
    chefImageElement.setAttribute('alt','Chef');

    chefDetailElement.append(chefNameElement, chefImageElement);

    const paraElement2 =  document.createElement('p');
    paraElement2.innerHTML = 'We are proud of our interiors.';

    const restaurantImageElement = new Image();
    restaurantImageElement.src = RestaurantImage;
    restaurantImageElement.setAttribute('alt','Restaurant');
    restaurantImageElement.setAttribute('style','width:100%');

    aboutPageContainer.append(aboutPageTitle,paraElement1,chefDetailElement, paraElement2,restaurantImageElement,...getOpenHours());

    return aboutPageContainer;
}


function getOpenHours(){
    const openHours = [['Mon & Tue 10:00 - 17:00','Wednesday 10.00 - 24.00','Thursday 10:00 - 24:00'],['Friday 10:00 - 12:00','Saturday 10:00 - 23:00','Sunday Closed']];
    
    const hoursTitleElement = document.createElement('h1');
    hoursTitleElement.innerHTML=`<b>Opening Hours</b>`;

    const openHoursContainer = document.createElement('div');
    openHoursContainer.classList.add('open-hours');

    openHours.forEach(item=>{
        const openHoursHalf = document.createElement('div');
        openHoursHalf.classList.add('open-hours-half');
        item.forEach(subitem =>{
            const element = document.createElement('p');
            element.innerHTML=subitem;
            openHoursHalf.append(element);
        });

        openHoursContainer.append(openHoursHalf);
    });

    return [hoursTitleElement,openHoursContainer];
}