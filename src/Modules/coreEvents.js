import {ToDoList} from './ToDoItems'
import { createWeekBox} from './boxWeek'
import { createTodayBox } from './boxToday'
import {createForm} from './boxForm'
import { createArchiveBox } from './boxArchive';



function addNewTaskEvent() {
    const mainBox = document.querySelector(".mainBox");
    const addNewTaskButton = document.querySelector(".addNewTask button");

    addNewTaskButton.addEventListener("click", () => {
        mainBox.removeChild(mainBox.lastChild);
        mainBox.appendChild(createForm());
        formSelectButton();
        submitTaskEvent();
    });
}


function submitTaskEvent() {
    const submitButton = document.querySelector(".textForm .buttons button");
    const mainBox = document.querySelector(".mainBox");

    submitButton.addEventListener("click", () => {
        ToDoList.addNewItem();
        mainBox.removeChild(mainBox.lastChild);
        mainBox.append(createArchiveBox());
        addNewTaskEvent();
    });
}


function sidebarEvents() {
    const archiveSidebar = document.querySelector(".sidebar .archive");
    const thisWeekSidebar = document.querySelector(".sidebar .thisWeek");
    const todaySidebar = document.querySelector(".sidebar .today");
    const mainBox = document.querySelector(".mainBox");

    //LOAD ARCHIVE BOX
    archiveSidebar.addEventListener("click", () => {
        mainBox.removeChild(mainBox.lastChild);
        mainBox.append(createArchiveBox());
        addNewTaskEvent();
    });

    //LOAD THIS WEEK BOX
    thisWeekSidebar.addEventListener("click", () => {
        mainBox.removeChild(mainBox.lastChild);
        mainBox.append(createWeekBox());
        addNewTaskEvent();
    });

    //LOAD TODAY BOX
    todaySidebar.addEventListener("click", () => {
        mainBox.removeChild(mainBox.lastChild);
        mainBox.append(createTodayBox());
        addNewTaskEvent();
    })

}


function removeDOMItems (index) {
    const itemsWrapper = document.querySelector('.itemsWrapper');

    
    if (itemsWrapper) {
        ToDoList.removeItem(index);

        while (itemsWrapper.firstChild) {
            itemsWrapper.removeChild(itemsWrapper.lastChild);
        }
    }

}

function formSelectButton() {
    const priorityButtons = document.querySelectorAll(".priorityWrapper div");
    console.log("test");
    if(priorityButtons){
        priorityButtons.forEach(button => button.addEventListener("click", () => {
            priorityButtons.forEach(e => e.classList.remove("selected"));
            button.classList.add("selected");
        }));
    }
    
}

export {removeDOMItems, sidebarEvents, addNewTaskEvent}





