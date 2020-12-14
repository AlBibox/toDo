import {Box} from './BaseConstuctor'
import {todayDate, dueDate} from './dates'
import {ToDoList} from './ToDoItems'


const content = document.querySelector(".content");

function createSidebar() {
    const wrapper = document.createElement("div");

    const todayBox = Box();
    todayBox.addImg("./IMG/today.png", "today icon");
    todayBox.addLabel("p", "Today");

    const thisWeek = Box();
    thisWeek.addImg("./IMG/week.png", "week icon")
    thisWeek.addLabel("p", "This week");

    wrapper.append(
        todayBox.getWrapper("today"),
        thisWeek.getWrapper("thisWeek")
        );


    wrapper.classList.add("sidebar");
    return wrapper
}



function addItems() {
    let list = ToDoList.list;
    const itemsWrapper = document.createElement("div");
    

    if(list.length >= 1){
        list.forEach(item => {
            if(dueDate(item.dueDate) == todayDate){
                const itemBox = document.createElement("div");
                
                const itemBox__Title = Box();
                itemBox__Title.addLabel("h5", `${item.title}`);

                const itemBox__Priority = Box();
                itemBox__Priority.addImg("./IMG/flag.png");

                const itemBoxInteractions = document.createElement("div");
                itemBoxInteractions.classList.add("itemInteractions");

                const editItem = Box();
                editItem.addImg("./IMG/edit.png");

                const archiveItem = Box();
                archiveItem.addImg("./IMG/archive.png");
                archiveItem.getWrapper().dataset.index = list.indexOf(item);

                itemBoxInteractions.append(
                    editItem.getWrapper('editItem'),
                    archiveItem.getWrapper('archiveItem'),
                )

                itemBox.append(
                    itemBox__Priority.getWrapper('itemPriority'),
                    itemBox__Title.getWrapper('itemTitle'), 
                    itemBoxInteractions
                    );
               
                itemBox.classList.add('singleItem');
                itemsWrapper.append(itemBox);
            }
            
        });
    }

    itemsWrapper.classList.add("itemsWrapper");
    return itemsWrapper
}



function createTodayBox() {
    const wrapper = document.createElement("div");

    let titleBox = Box();
    titleBox.addLabel("h1", "Today");

    let dateBox = Box();
    dateBox.addLabel("h4", `${todayDate}`);

    
    let buttonsBox = Box();
    buttonsBox.addButton("+", "+");

    wrapper.append(
        titleBox.getWrapper("title"),
        dateBox.getWrapper("date"),
        addItems(),
        buttonsBox.getWrapper("addTask")
    );

    wrapper.classList.add("todayBox");
    return wrapper;   
}

function createMainBox() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("mainBox");
    return wrapper;
}



function loadHomePage() {
    const homeWrapper = document.createElement("div");
    const sidebar = createSidebar();
    const todayBox = createTodayBox();
    const mainBox = createMainBox();

    mainBox.appendChild(todayBox);
    
    homeWrapper.append(
        sidebar,
        mainBox
    );

    homeWrapper.classList.add("homeWrapper");
    content.appendChild(homeWrapper);

    return homeWrapper;
}






export {loadHomePage, createTodayBox}