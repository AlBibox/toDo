const ToDoItems = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes}
};


const ToDoList = (() => {
    let list = [];

    const sortItems = () => {
       return list.sort((a, b) => {
            let firstDate = new Date(a.dueDate);
            let secondDate = new Date(b.dueDate);
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
    }

    const addNewItem = () =>{
        const title = document.querySelector(".title input").value;
        const description = document.querySelector(".description input").value;
        const dueDate = document.querySelector(".dueDate input").value;
        const priority = document.querySelector(".priority select").selectedOptions[0].value;
        const notes = document.querySelector(".notes textarea").value;

        let toDO = ToDoItems(title, description, dueDate, priority, notes);
        list.push(toDO);
        sortItems();    
    };

   

    

    return {list, addNewItem}

})();



export {ToDoItems, ToDoList}

