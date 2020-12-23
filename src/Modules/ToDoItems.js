import { getTime } from 'date-fns'
import { getDeadline, todayDate, rawWeekStartDate, rawWeekEndDate, getRawDeadline } from "./dates";

const ToDoItems = (title, description, deadline, priority, notes) => {
    return {title, description, deadline, priority, notes}
};


const ToDoList = (() => {
    let list = [];

    const sortItems = () => {
       return list.sort((a, b) => {
            let firstDate = new Date(a.deadline);
            let secondDate = new Date(b.deadline);
            if(firstDate > secondDate) return 1;
            if (firstDate < secondDate) return -1;
            if(firstDate = secondDate){
                let firstPriority = a.priority;
                let secondPriority = b.priority;
                if(firstPriority > secondPriority) return -1;
                if (firstPriority < secondPriority) return 1;
            }
            return 0;         
        });
    };

    const addNewItem = () => {
        const title = document.querySelector(".title input").value;
        const description = document.querySelector(".description input").value;
        const deadline = document.querySelector(".deadline input").value;
        const priority = document.querySelector(".priorityWrapper .selected").dataset.priority;
        const notes = document.querySelector(".notes textarea").value;

        let toDO = ToDoItems(title, description, deadline, priority, notes);
        list.push(toDO);
        sortItems();    
    };
    
    const editItem = (index) => {
        const title = document.querySelector(".title input").value;
        const description = document.querySelector(".description input").value;
        const deadline = document.querySelector(".deadline input").value;
        const priority = document.querySelector(".priorityWrapper .selected").dataset.priority;
        const notes = document.querySelector(".notes textarea").value;

        let item = list[index];
 
        item.title = title;
        item.description = description;
        item.deadline = deadline;
        item.priority = priority;
        item.notes = notes;
        sortItems();
    };

    const removeItem = (index) => {
        sortItems().splice(index, 1);
    };

    const getTodayItems = () =>{
        return sortItems().filter(item => getDeadline(item.deadline) == todayDate);
    }

    
    const getWeeklyItems = () =>{
        return sortItems().filter(item => getTime(getRawDeadline(item.deadline)) >= getTime(rawWeekStartDate) && 
            getTime(getRawDeadline(item.deadline)) <= getTime(rawWeekEndDate));
    }

   

    

    return {list, addNewItem, removeItem, getTodayItems, getWeeklyItems, sortItems, editItem}

})();



export {ToDoItems, ToDoList}

