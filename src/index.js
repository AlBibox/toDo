import {loadHomePage } from './Modules/main-page'
import {Storage} from './Modules/localStorage'
import {sidebarEvents, addNewTaskEvent} from './Modules/coreEvents'

//localStorage.removeItem('data')

Storage.initialize();




loadHomePage();
sidebarEvents();
addNewTaskEvent();





