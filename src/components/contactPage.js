
import MapImage from '../images/map.jpeg';

export default function contactPage(){

    const contactPageContainer = document.createElement('div');
    contactPageContainer.setAttribute('id','contact');
    contactPageContainer.classList.add('contact-page');
    contactPageContainer.setAttribute('style','display:none');

    const MapElement = new Image();
    MapElement.src = MapImage;
    MapElement.setAttribute('alt','Map');
    MapElement.setAttribute('id','contact-map');

    const contactTextContainer = document.createElement('div');
    contactTextContainer.classList.add('contact-text-container');

    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contact-title');
    contactTitle.innerHTML = 'Contact';

    const paraTexts = [
        'Find us at some address at some place or call us at 05050515-122330',
        'We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.',
        `<b>Reserve</b> a table, ask for today's special or just send us a message.`
    ];

    const paraTextElement = paraTexts.reduce((result,item,index) => {
        const element = document.createElement('p');
        element.innerHTML=item;
        if(index === 2)
            element.classList.add('reserve-table');

        return result.concat(element);
    },[]);
    
    contactTextContainer.append(contactTitle,...paraTextElement);

    contactPageContainer.append(MapElement,contactTextContainer);
    
    return contactPageContainer;
}