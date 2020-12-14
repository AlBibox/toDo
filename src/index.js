import {createForm} from './Modules/addForm';
import {createTodayBox, loadHomePage} from './Modules/main-page'
import {ToDoList} from './Modules/ToDoItems'

function events(){
    const mainBox = document.querySelector(".mainBox");
    const todayBox = document.querySelector(".todayBox");
    const textForm = document.querySelector(".textForm");
    

    if(todayBox){
        const addTaskButton = document.querySelector(".todayBox button");
        addTaskButton.addEventListener("click", () =>{
            mainBox.removeChild(todayBox);
            mainBox.appendChild(createForm());
            events();
        })
    }

    if(textForm){
        const submitButton = document.querySelector(".textForm .buttons button");
        submitButton.addEventListener("click", () => {
            ToDoList.addNewItem();
            mainBox.removeChild(textForm);
            mainBox.appendChild(createTodayBox());
            events();
        });
    }
}

loadHomePage();
events();







