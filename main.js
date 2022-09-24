/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/aboutPage.js":
/*!*************************************!*\
  !*** ./src/components/aboutPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _images_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef.jpeg */ "./src/images/chef.jpeg");
/* harmony import */ var _images_img_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/img_restaurant.jpeg */ "./src/images/img_restaurant.jpeg");



function aboutPage(){

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
    chefImageElement.src= _images_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    chefImageElement.classList.add('chef-image');
    chefImageElement.setAttribute('alt','Chef');

    chefDetailElement.append(chefNameElement, chefImageElement);

    const paraElement2 =  document.createElement('p');
    paraElement2.innerHTML = 'We are proud of our interiors.';

    const restaurantImageElement = new Image();
    restaurantImageElement.src = _images_img_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_1__;
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

/***/ }),

/***/ "./src/components/contactPage.js":
/*!***************************************!*\
  !*** ./src/components/contactPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _images_map_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/map.jpeg */ "./src/images/map.jpeg");



function contactPage(){

    const contactPageContainer = document.createElement('div');
    contactPageContainer.setAttribute('id','contact');
    contactPageContainer.classList.add('contact-page');
    contactPageContainer.setAttribute('style','display:none');

    const MapElement = new Image();
    MapElement.src = _images_map_jpeg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ }),

/***/ "./src/components/homePage.js":
/*!************************************!*\
  !*** ./src/components/homePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
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



/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "default": () => (/* binding */ menu),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menuArray = [{'home':'#home'},{'menu':'#menu'},{'about':'#about'},{'contact':'#contact'}];
const querySelector = menuArray.map(menu=>Object.values(menu)[0]).join(', ');
const menuItems= [];

function menu(){

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



/***/ }),

/***/ "./src/components/menuPage.js":
/*!************************************!*\
  !*** ./src/components/menuPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _data_menuData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menuData.json */ "./src/data/menuData.json");


const menuHeadersArray = [];
const menuContentsArray = [];

function menuPage() {
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

    _data_menuData_json__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach((item,index)=> {
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
  
    const menuItemsArray = _data_menuData_json__WEBPACK_IMPORTED_MODULE_0__.menuItemsData.reduce((result,item,index)=>{
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


/***/ }),

/***/ "./src/images/chef.jpeg":
/*!******************************!*\
  !*** ./src/images/chef.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa8da15af1ab13f3e49e.jpeg";

/***/ }),

/***/ "./src/images/img_restaurant.jpeg":
/*!****************************************!*\
  !*** ./src/images/img_restaurant.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5baccedcf4ced38b6751.jpeg";

/***/ }),

/***/ "./src/images/map.jpeg":
/*!*****************************!*\
  !*** ./src/images/map.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f164b4bdad91e4ceeac8.jpeg";

/***/ }),

/***/ "./src/data/menuData.json":
/*!********************************!*\
  !*** ./src/data/menuData.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"menuItems":[{"Pizza":"#pizza"},{"Pasta":"#pasta"},{"Starters":"#starters"}],"menuItemsData":[{"Pizza":[{"name":"Margherita","price":"$12.50","description":"Fresh tomatoes, fresh mozzarella, fresh basil"},{"name":"Fromaggio","price":"$15.50","description":"Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)"},{"name":"Meat Town","tag":["red","Hot!"],"price":"$20.00","description":"Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken"}]},{"Pasta":[{"name":"Lasagna","tag":["grey","Popular"],"price":"$13.50","description":"Special sauce, mozzarella, parmesan, ground beef"},{"name":"Ravioli","price":"$14.50","description":"Ravioli filled with cheese"},{"name":"Spaghetti Classica","price":"$11.00","description":"Fresh tomatoes, onions, ground beef"}]},{"Starters":[{"name":"Today\'s Soup","tag":["grey","Seasonal"],"price":"$5.50","description":"Ask the waiter"},{"name":"Bruschetta","price":"$8.50","description":"Bread with pesto, tomatoes, onion, garlic"},{"name":"Garlic bread","price":"$9.50","description":"Grilled ciabatta, garlic butter, onions"}]}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homePage */ "./src/components/homePage.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menuPage */ "./src/components/menuPage.js");
/* harmony import */ var _components_aboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aboutPage */ "./src/components/aboutPage.js");
/* harmony import */ var _components_contactPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contactPage */ "./src/components/contactPage.js");







const contentElement = document.querySelector('#content');
contentElement.append((0,_components_menu__WEBPACK_IMPORTED_MODULE_2__.menu)(),(0,_components_homePage__WEBPACK_IMPORTED_MODULE_1__.homePage)(),(0,_components_menuPage__WEBPACK_IMPORTED_MODULE_3__["default"])(),(0,_components_aboutPage__WEBPACK_IMPORTED_MODULE_4__["default"])(),(0,_components_contactPage__WEBPACK_IMPORTED_MODULE_5__["default"])());

(0,_components_homePage__WEBPACK_IMPORTED_MODULE_1__.addEventListeners)();
(0,_components_menu__WEBPACK_IMPORTED_MODULE_2__.addEventListeners)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3dFO0FBQ1Q7QUFDdkM7QUFDRTtBQUNJOztBQUVuRDtBQUNBLHNCQUFzQixzREFBSSxHQUFHLDhEQUFRLEdBQUcsZ0VBQVEsR0FBRyxpRUFBUyxHQUFHLG1FQUFXOztBQUUxRSx1RUFBd0I7QUFDeEIsbUVBQXVCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9hYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnVQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmltcG9ydCBDaGVmSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2NoZWYuanBlZyc7XG5pbXBvcnQgUmVzdGF1cmFudEltYWdlIGZyb20gJy4uL2ltYWdlcy9pbWdfcmVzdGF1cmFudC5qcGVnJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0UGFnZSgpe1xuXG4gICAgY29uc3QgYWJvdXRQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRQYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dCcpO1xuICAgIGFib3V0UGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYWdlJyk7XG4gICAgYWJvdXRQYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcblxuICAgIGNvbnN0IGFib3V0UGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhYm91dFBhZ2VUaXRsZS5pbm5lckhUTUw9J0Fib3V0JztcbiAgICBhYm91dFBhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10aXRsZScpO1xuXG4gICAgY29uc3QgcGFyYUVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFFbGVtZW50MS5pbm5lckhUTUwgPSBgVGhlIFBpenphIFJlc3RhdXJhbnQgd2FzIGZvdW5kZWQgaW4gYmxhYmxhIGJ5IE1yLiBJdGFsaWFubyBpbiBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5gO1xuXG4gICAgY29uc3QgY2hlZkRldGFpbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hlZkRldGFpbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlZi1kZXRhaWxzJyk7XG5cbiAgICBjb25zdCBjaGVmTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hlZk5hbWVFbGVtZW50LmlubmVySFRNTD1gPHN0cm9uZz5UaGUgQ2hlZj88L3N0cm9uZz4gTXIuIEl0YWxpYW5vIGhpbXNlbGY8L3NwYW4+YDtcblxuICAgIGNvbnN0IGNoZWZJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBjaGVmSW1hZ2VFbGVtZW50LnNyYz0gQ2hlZkltYWdlO1xuICAgIGNoZWZJbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlZi1pbWFnZScpO1xuICAgIGNoZWZJbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCdDaGVmJyk7XG5cbiAgICBjaGVmRGV0YWlsRWxlbWVudC5hcHBlbmQoY2hlZk5hbWVFbGVtZW50LCBjaGVmSW1hZ2VFbGVtZW50KTtcblxuICAgIGNvbnN0IHBhcmFFbGVtZW50MiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYUVsZW1lbnQyLmlubmVySFRNTCA9ICdXZSBhcmUgcHJvdWQgb2Ygb3VyIGludGVyaW9ycy4nO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgIHJlc3RhdXJhbnRJbWFnZUVsZW1lbnQuc3JjID0gUmVzdGF1cmFudEltYWdlO1xuICAgIHJlc3RhdXJhbnRJbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCdSZXN0YXVyYW50Jyk7XG4gICAgcmVzdGF1cmFudEltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnd2lkdGg6MTAwJScpO1xuXG4gICAgYWJvdXRQYWdlQ29udGFpbmVyLmFwcGVuZChhYm91dFBhZ2VUaXRsZSxwYXJhRWxlbWVudDEsY2hlZkRldGFpbEVsZW1lbnQsIHBhcmFFbGVtZW50MixyZXN0YXVyYW50SW1hZ2VFbGVtZW50LC4uLmdldE9wZW5Ib3VycygpKTtcblxuICAgIHJldHVybiBhYm91dFBhZ2VDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gZ2V0T3BlbkhvdXJzKCl7XG4gICAgY29uc3Qgb3BlbkhvdXJzID0gW1snTW9uICYgVHVlIDEwOjAwIC0gMTc6MDAnLCdXZWRuZXNkYXkgMTAuMDAgLSAyNC4wMCcsJ1RodXJzZGF5IDEwOjAwIC0gMjQ6MDAnXSxbJ0ZyaWRheSAxMDowMCAtIDEyOjAwJywnU2F0dXJkYXkgMTA6MDAgLSAyMzowMCcsJ1N1bmRheSBDbG9zZWQnXV07XG4gICAgXG4gICAgY29uc3QgaG91cnNUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhvdXJzVGl0bGVFbGVtZW50LmlubmVySFRNTD1gPGI+T3BlbmluZyBIb3VyczwvYj5gO1xuXG4gICAgY29uc3Qgb3BlbkhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3BlbkhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4taG91cnMnKTtcblxuICAgIG9wZW5Ib3Vycy5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgY29uc3Qgb3BlbkhvdXJzSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcGVuSG91cnNIYWxmLmNsYXNzTGlzdC5hZGQoJ29wZW4taG91cnMtaGFsZicpO1xuICAgICAgICBpdGVtLmZvckVhY2goc3ViaXRlbSA9PntcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTD1zdWJpdGVtO1xuICAgICAgICAgICAgb3BlbkhvdXJzSGFsZi5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZW5Ib3Vyc0NvbnRhaW5lci5hcHBlbmQob3BlbkhvdXJzSGFsZik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2hvdXJzVGl0bGVFbGVtZW50LG9wZW5Ib3Vyc0NvbnRhaW5lcl07XG59IiwiXG5pbXBvcnQgTWFwSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL21hcC5qcGVnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcblxuICAgIGNvbnN0IGNvbnRhY3RQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFBhZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhZ2UnKTtcbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG5cbiAgICBjb25zdCBNYXBFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgTWFwRWxlbWVudC5zcmMgPSBNYXBJbWFnZTtcbiAgICBNYXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnYWx0JywnTWFwJyk7XG4gICAgTWFwRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdC1tYXAnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG5cbiAgICBjb25zdCBwYXJhVGV4dHMgPSBbXG4gICAgICAgICdGaW5kIHVzIGF0IHNvbWUgYWRkcmVzcyBhdCBzb21lIHBsYWNlIG9yIGNhbGwgdXMgYXQgMDUwNTA1MTUtMTIyMzMwJyxcbiAgICAgICAgJ1dlIG9mZmVyIGZ1bGwtc2VydmljZSBjYXRlcmluZyBmb3IgYW55IGV2ZW50LCBsYXJnZSBvciBzbWFsbC4gV2UgdW5kZXJzdGFuZCB5b3VyIG5lZWRzIGFuZCB3ZSB3aWxsIGNhdGVyIHRoZSBmb29kIHRvIHNhdGlzZnkgdGhlIGJpZ2dlcnN0IGNyaXRlcmlhIG9mIHRoZW0gYWxsLCBib3RoIGxvb2sgYW5kIHRhc3RlLicsXG4gICAgICAgIGA8Yj5SZXNlcnZlPC9iPiBhIHRhYmxlLCBhc2sgZm9yIHRvZGF5J3Mgc3BlY2lhbCBvciBqdXN0IHNlbmQgdXMgYSBtZXNzYWdlLmBcbiAgICBdO1xuXG4gICAgY29uc3QgcGFyYVRleHRFbGVtZW50ID0gcGFyYVRleHRzLnJlZHVjZSgocmVzdWx0LGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUw9aXRlbTtcbiAgICAgICAgaWYoaW5kZXggPT09IDIpXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmUtdGFibGUnKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChlbGVtZW50KTtcbiAgICB9LFtdKTtcbiAgICBcbiAgICBjb250YWN0VGV4dENvbnRhaW5lci5hcHBlbmQoY29udGFjdFRpdGxlLC4uLnBhcmFUZXh0RWxlbWVudCk7XG5cbiAgICBjb250YWN0UGFnZUNvbnRhaW5lci5hcHBlbmQoTWFwRWxlbWVudCxjb250YWN0VGV4dENvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlQ29udGFpbmVyO1xufSIsImZ1bmN0aW9uIGhvbWVQYWdlKCl7XG5cbiAgICBjb25zdCBob21lUGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXNwbGF5SG91cnNFbGVtZW50ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgaG9tZVBhZ2VUZXh0UGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVQYWdlVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc2VlTWVudUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNlZU1lbnVFbGVtZW50LmlubmVySFRNTD0nTGV0IG1lIHNlZSB0aGUgbWVudSc7XG4gICAgc2VlTWVudUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VlLW1lbnUnLCdidG4nKTtcblxuICAgIGhvbWVQYWdlVGV4dEVsZW1lbnQuaW5uZXJIVE1MPWB0aGluPGJyPkNSVVNUIFBJWlpBYDtcbiAgICBob21lUGFnZVRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZS10ZXh0Jyk7XG5cbiAgICBob21lUGFnZVRleHRQYXJlbnRFbGVtZW50LmFwcGVuZChob21lUGFnZVRleHRFbGVtZW50LHNlZU1lbnVFbGVtZW50KTtcbiAgICBob21lUGFnZVRleHRQYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZS10ZXh0LWNvbnRhaW5lcicpXG5cbiAgICBob3Vyc1RleHRFbGVtZW50LmlubmVySFRNTCA9ICdPcGVuIGZyb20gMTBhbSB0byAxMnBtJztcbiAgICBob3Vyc1RleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLXRleHQnKTtcblxuICAgIGRpc3BsYXlIb3Vyc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ob3VycycpO1xuICAgIGRpc3BsYXlIb3Vyc0VsZW1lbnQuYXBwZW5kQ2hpbGQoaG91cnNUZXh0RWxlbWVudCk7XG5cbiAgICBob21lUGFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG4gICAgaG9tZVBhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgaG9tZVBhZ2VFbGVtZW50LmFwcGVuZCggZGlzcGxheUhvdXJzRWxlbWVudCxob21lUGFnZVRleHRQYXJlbnRFbGVtZW50KTtcblxuICAgIHJldHVybiBob21lUGFnZUVsZW1lbnQ7XG5cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VlLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH0pO1xufVxuXG5leHBvcnQge2hvbWVQYWdlLGFkZEV2ZW50TGlzdGVuZXJzfTsiLCJjb25zdCBtZW51QXJyYXkgPSBbeydob21lJzonI2hvbWUnfSx7J21lbnUnOicjbWVudSd9LHsnYWJvdXQnOicjYWJvdXQnfSx7J2NvbnRhY3QnOicjY29udGFjdCd9XTtcbmNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSBtZW51QXJyYXkubWFwKG1lbnU9Pk9iamVjdC52YWx1ZXMobWVudSlbMF0pLmpvaW4oJywgJyk7XG5jb25zdCBtZW51SXRlbXM9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XG5cbiAgICBjb25zdCBtZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBtZW51QXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBtZW51SXRlbS5pbm5lckhUTUwgPSBPYmplY3Qua2V5cyhpdGVtKVswXTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChgJHtPYmplY3Qua2V5cyhpdGVtKVswXX0tbmF2YCwnYnRuJyApO1xuXG4gICAgICAgIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICAgICAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0pO1xuICAgIH0pO1xuXG4gICAgbWVudUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgcmV0dXJuIG1lbnVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIGNvbnN0IHBhZ2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yKTtcbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtPT57XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGV2ZW50LHBhZ2VMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LHBhZ2VzKXtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuaXRlbSgwKS5zbGljZSgwLC00KTtcbiAgICBjb25zdCBwYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldElkfWApO1xuXG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+e1xuICAgICAgICBwYWdlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgaWYocGFnZS5nZXRBdHRyaWJ1dGUoJ2lkJykhPT0gdGFyZ2V0SWQgKSAgIFxuICAgICAgICAgICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7bWVudSxhZGRFdmVudExpc3RlbmVyc30iLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi4vZGF0YS9tZW51RGF0YS5qc29uJztcblxuY29uc3QgbWVudUhlYWRlcnNBcnJheSA9IFtdO1xuY29uc3QgbWVudUNvbnRlbnRzQXJyYXkgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudVBhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudVBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgbWVudVBhZ2VOYXYgPSBnZXRNZW51UGFnZU5hdigpO1xuICAgIGNvbnN0IG1lbnVQYWdlQ29udGVudHMgPSBnZXRNZW51Q29udGVudHMoKTtcbiAgICBtZW51UGFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcbiAgICBtZW51UGFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG4gICAgbWVudVBhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcbiAgICBtZW51UGFnZVRpdGxlLmlubmVySFRNTD0nVGhlIE1lbnUnO1xuICAgIG1lbnVQYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlLXRpdGxlJyk7XG5cbiAgICBtZW51UGFnZUVsZW1lbnQuYXBwZW5kKG1lbnVQYWdlVGl0bGUsbWVudVBhZ2VOYXYsLi4ubWVudVBhZ2VDb250ZW50cyk7XG5cbiAgICByZXR1cm4gbWVudVBhZ2VFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRNZW51UGFnZU5hdigpe1xuICAgIGNvbnN0IG1lbnVQYWdlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIG1lbnVEYXRhLm1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBtZW51SXRlbS5pbm5lckhUTUwgPSBPYmplY3Qua2V5cyhpdGVtKVswXTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChgJHtPYmplY3Qua2V5cyhpdGVtKVswXS50b0xvd2VyQ2FzZSgpfS1uYXZgLCdtZW51LWhlYWRlcicsJ2J0bicpO1xuICAgICAgICBpZihpbmRleD09PTApXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgICAgXG4gICAgICAgIG1lbnVIZWFkZXJzQXJyYXkucHVzaChtZW51SXRlbSk7XG4gICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxoYW5kbGVDbGljayk7XG4gICAgICAgIG1lbnVQYWdlTmF2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KTtcblxuICAgIG1lbnVQYWdlTmF2LmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZS1uYXYnKTtcbiAgICByZXR1cm4gbWVudVBhZ2VOYXY7XG59XG5cbmZ1bmN0aW9uIGdldE1lbnVDb250ZW50cygpe1xuICBcbiAgICBjb25zdCBtZW51SXRlbXNBcnJheSA9IG1lbnVEYXRhLm1lbnVJdGVtc0RhdGEucmVkdWNlKChyZXN1bHQsaXRlbSxpbmRleCk9PntcbiAgICAgICAgY29uc3QgbWVudUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50cycpO1xuICAgICAgICBtZW51Q29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJyxPYmplY3Qua2V5cyhpdGVtKVswXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBpZihpbmRleCE9PTApXG4gICAgICAgICAgICBtZW51Q29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gT2JqZWN0LnZhbHVlcyhpdGVtKVswXTtcbiAgICAgICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgbWVudUl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgICAgICAgICAgbWVudUl0ZW1OYW1lLmlubmVySFRNTD1pdGVtLm5hbWU7XG4gICAgICAgICAgICBtZW51SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGlmKE9iamVjdC5oYXNPd24oaXRlbSwndGFnJykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtVGFnLmNsYXNzTGlzdC5hZGQoJ3RhZycsIGl0ZW0udGFnWzBdKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbVRhZy5pbm5lckhUTUw9aXRlbS50YWdbMV07XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtVGFnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgbWVudUl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgICAgICAgbWVudUl0ZW1QcmljZS5pbm5lckhUTUw9aXRlbS5wcmljZTtcbiAgICAgICAgICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcbiAgICAgICAgICAgIG1lbnVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgIGlmKGluZGV4PG1lbnVJdGVtcy5sZW5ndGgtMSl7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZW51Q29udGVudHNBcnJheS5wdXNoKG1lbnVDb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jb25jYXQobWVudUNvbnRlbnRDb250YWluZXIpO1xuICAgIH0sW10pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCl7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0Lml0ZW0oMCkuc2xpY2UoMCwtNCk7XG4gICAgY29uc3QgcGFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXRJZH1gKTtcblxuICAgIG1lbnVIZWFkZXJzQXJyYXkuZm9yRWFjaChoZWFkZXIgPT57XG4gICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICAgICBpZihoZWFkZXIuY2xhc3NMaXN0Lml0ZW0oMCkuc2xpY2UoMCwtNCk9PT0gdGFyZ2V0SWQpe1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgICAgICAgfSAgXG4gICAgfSk7XG5cbiAgICBtZW51Q29udGVudHNBcnJheS5mb3JFYWNoKGNvbnRlbnQgPT57XG4gICAgICAgICAgY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIGlmKGNvbnRlbnQuZ2V0QXR0cmlidXRlKCdpZCcpIT09IHRhcmdldElkKSAgIFxuICAgICAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aG9tZVBhZ2UsYWRkRXZlbnRMaXN0ZW5lcnMgYXMgYWRkSG9tZVBhZ2VFdmVudExpc3RlbmVyfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZVBhZ2UnO1xuaW1wb3J0IHttZW51LGFkZEV2ZW50TGlzdGVuZXJzIGFzIGFkZE1lbnVOYXZFdmVudExpc3RlbmVyfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL21lbnVQYWdlJztcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0UGFnZSc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3RQYWdlJztcblxuY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudEVsZW1lbnQuYXBwZW5kKG1lbnUoKSxob21lUGFnZSgpLG1lbnVQYWdlKCksYWJvdXRQYWdlKCksY29udGFjdFBhZ2UoKSk7XG5cbmFkZEhvbWVQYWdlRXZlbnRMaXN0ZW5lcigpO1xuYWRkTWVudU5hdkV2ZW50TGlzdGVuZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=