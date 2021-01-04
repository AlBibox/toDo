import { getTime } from 'date-fns'
import { rawTodayDate, rawWeekEndDate, getRawDeadline } from "./dates";



const ToDoItems = (title, description, deadline, priority, notes) => {
    return { title, description, deadline, priority, notes }
};


const Storage = (() => {
    const view = () =>{
        return JSON.parse(localStorage.getItem('data'));
    };


    const items = view();
    

    const initialize = () => {
        if (localStorage.getItem('data') == null) {
            localStorage.setItem('data', '[]');
        }
    };


    const sortItems = () => {
        return items.sort((a, b) => {
            let firstDate = new Date(a.deadline);
            let secondDate = new Date(b.deadline);
            if (firstDate > secondDate) return 1;
            if (firstDate < secondDate) return -1;
            if (firstDate = secondDate) {
                let firstPriority = a.priority;
                let secondPriority = b.priority;
                if (firstPriority > secondPriority) return -1;
                if (firstPriority < secondPriority) return 1;
            }
            return 0;
        });
    };

    
    const addItem = () => {
        const title = document.querySelector(".title input").value;
        const description = document.querySelector(".description input").value;
        const deadline = document.querySelector(".deadline input").value;
        const priority = document.querySelector(".priorityWrapper .selected").dataset.priority;
        const notes = document.querySelector(".notes textarea").value;

        let toDO = ToDoItems(title, description, deadline, priority, notes);
        items.push(toDO);

        sortItems();
        localStorage.setItem('data', JSON.stringify(items));
        
    };


    const removeItem = (index) => {
        sortItems().splice(index, 1);

        sortItems();
        localStorage.setItem('data', JSON.stringify(items));
        
    };


    const editItem = (index) => {
        const title = document.querySelector(".title input").value;
        const description = document.querySelector(".description input").value;
        const deadline = document.querySelector(".deadline input").value;
        const priority = document.querySelector(".priorityWrapper .selected").dataset.priority;
        const notes = document.querySelector(".notes textarea").value;

        let item = items[index];

        item.title = title;
        item.description = description;
        item.deadline = deadline;
        item.priority = priority;
        item.notes = notes;

        sortItems();
        localStorage.setItem('data', JSON.stringify(items));
    };


    const getTodayItems = () => {
        return sortItems().filter(item => getTime(getRawDeadline(item.deadline)) <= getTime(rawTodayDate));
    };

    
    const getWeeklyItems = () => {
        return sortItems().filter(item => getTime(getRawDeadline(item.deadline)) <= getTime(rawWeekEndDate));
    }

    return {view, initialize, addItem, sortItems, removeItem, editItem, getTodayItems, getWeeklyItems}

    
})();

export {Storage}








