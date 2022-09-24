import './style.css';
import {homePage,addEventListeners as addHomePageEventListener} from './components/homePage';
import {menu,addEventListeners as addMenuNavEventListener} from './components/menu';
import menuPage from './components/menuPage';
import aboutPage from './components/aboutPage';
import contactPage from './components/contactPage';

const contentElement = document.querySelector('#content');
contentElement.append(menu(),homePage(),menuPage(),aboutPage(),contactPage());

addHomePageEventListener();
addMenuNavEventListener();