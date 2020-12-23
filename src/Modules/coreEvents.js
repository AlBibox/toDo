import {ToDoList} from './ToDoItems'
import { createWeekBox} from './boxWeek'
import { createTodayBox } from './boxToday'
import {createForm, editForm} from './boxForm'
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


function editTaskEvent(index) {
    const mainBox = document.querySelector(".mainBox");
    
    mainBox.removeChild(mainBox.lastChild);
    mainBox.appendChild(editForm(index));
    formSelectButton();

    const submitButton = document.querySelector(".textForm .buttons button");

    //FORM SUBMISSION WITH VALIDATION
    submitButton.addEventListener("click", () => {
        const taskTitleValue = document.querySelector(".title input").value;
        const taskDeadlineValue = document.querySelector(".deadline input").value;

        const taskTitleBox = document.querySelector(".title");
        const taskDeadlineBox = document.querySelector(".deadline");

        const titleErrorCheck = document.querySelector(".title p");
        const deadlineErrorCheck = document.querySelector(".deadline p");

        if (titleErrorCheck) taskTitleBox.removeChild(titleErrorCheck);
        if (deadlineErrorCheck) taskDeadlineBox.removeChild(deadlineErrorCheck);

        //TITLE ERROR
        if (taskTitleValue == "") {
            const titleError = document.createElement("p");

            titleError.textContent = "Enter a valid title";
            taskTitleBox.appendChild(titleError);
        }

        //DEADLINE ERROR
        if (taskDeadlineValue == "") {
            const deadlineError = document.createElement("p");

            deadlineError.textContent = "Enter a valid deadline";
            taskDeadlineBox.appendChild(deadlineError);
        }

        //NO ERRORS
        if (taskDeadlineValue != "" && taskTitleValue != "") {
            ToDoList.editItem(index);
            mainBox.removeChild(mainBox.lastChild);
            mainBox.append(createArchiveBox());
            addNewTaskEvent();
        }
        
    });

}



function submitTaskEvent() {
    const submitButton = document.querySelector(".textForm .buttons button");
    const mainBox = document.querySelector(".mainBox");

    //FORM SUBMISSION WITH VALIDATION
    submitButton.addEventListener("click", () => {
        const taskTitleValue = document.querySelector(".title input").value;
        const taskDeadlineValue = document.querySelector(".deadline input").value;

        const taskTitleBox = document.querySelector(".title");
        const taskDeadlineBox = document.querySelector(".deadline");

        const titleErrorCheck = document.querySelector(".title p");
        const deadlineErrorCheck = document.querySelector(".deadline p");

        if (titleErrorCheck) taskTitleBox.removeChild(titleErrorCheck);
        if (deadlineErrorCheck) taskDeadlineBox.removeChild(deadlineErrorCheck);

        //TITLE ERROR
        if (taskTitleValue == "") {
            const titleError = document.createElement("p");

            titleError.textContent = "Enter a valid title";
            taskTitleBox.appendChild(titleError);
        }

        //DEADLINE ERROR
        if (taskDeadlineValue == "") {
            const deadlineError = document.createElement("p");

            deadlineError.textContent = "Enter a valid deadline";
            taskDeadlineBox.appendChild(deadlineError);
        }

        //NO ERRORS
        if (taskDeadlineValue != "" && taskTitleValue != "") {
            ToDoList.addNewItem();
            mainBox.removeChild(mainBox.lastChild);
            mainBox.append(createArchiveBox());
            addNewTaskEvent();
        }
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

export {removeDOMItems, sidebarEvents, addNewTaskEvent, editTaskEvent}





