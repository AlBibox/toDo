import {Box} from './BaseConstuctor'
import { Storage } from './localStorage';


function createForm() {
    const container = document.createElement("div"); //formContainer

    let containerTitle = Box();
    containerTitle.addLabel("h1", "Task Editor");

    

    //TITLE BOX
    let titleBox = Box();
    titleBox.addLabel("h3", "Title");
    titleBox.addInput("text", "title");

    //DESCRIPTION BOX
    let descriptionBox = Box();
    descriptionBox.addLabel("h3", "Description");
    descriptionBox.addInput("text", "description");

    //DEADLINE BOX
    let deadlineBox = Box();
    deadlineBox.addLabel("h3", "Deadline");
    deadlineBox.addInput("date", "deadline");

    //PRIORITY BOX
    let priorityBox = Box();
    priorityBox.addLabel("h3", "Priority");

        let priorityWrapper = document.createElement("div");
        priorityWrapper.classList.add("priorityWrapper");
    
            let priorityZero = Box();
            priorityZero.getWrapper().dataset.priority = 0;
            priorityZero.addImg("./IMG/flag0.png", "Low Priority Flag");

            let priorityOne = Box();
            priorityOne.getWrapper().dataset.priority = 1;
            priorityOne.addImg("./IMG/flag1.png", "Medium Priority Flag");

            let priorityTwo = Box();
            priorityTwo.getWrapper().dataset.priority = 2;
            priorityTwo.addImg("./IMG/flag2.png", "High Priority Flag");
    
    
        priorityWrapper.append(
            priorityZero.getWrapper("selected"),
            priorityOne.getWrapper(),
            priorityTwo.getWrapper(),
        )

    priorityBox.getWrapper().appendChild(
        priorityWrapper
    );

    
    //NOTES BOX
    let noteBox = Box();
    noteBox.addLabel("h3", "Notes");
    noteBox.addTextArea("notes");

    //BUTTONS BOX
    let buttonsBox = Box();
    buttonsBox.addButton("SUBMIT", "submitTask");


    //WRAPPING UP CONTENT
    let formContent = Box();
    formContent.getWrapper().append(
        titleBox.getWrapper("title"),
        descriptionBox.getWrapper("description"),
        deadlineBox.getWrapper("deadline"),
        priorityBox.getWrapper("priority"),
        noteBox.getWrapper("notes"),
        buttonsBox.getWrapper("buttons"),
    )

    container.append(
        containerTitle.getWrapper("containerTitle"),
        formContent.getWrapper("containerContent"),
        );
    
    container.classList.add("textForm");

    return container;
}



function editForm (index) {
    const container = document.createElement("div"); //formContainer
    //let item = ToDoList.sortItems()[index];
    let item = Storage.sortItems()[index];

    let containerTitle = Box();
    containerTitle.addLabel("h1", "Task Editor");

    //TITLE BOX
    let titleBox = Box();
    titleBox.addLabel("h3", "Title");
    titleBox.addInput("text", "title", `${item.title}`);

    //DESCRIPTION BOX
    let descriptionBox = Box();
    descriptionBox.addLabel("h3", "Description");
    descriptionBox.addInput("text", "description", `${item.description}`);

    //DEADLINE BOX
    let deadlineBox = Box();
    deadlineBox.addLabel("h3", "Deadline");
    deadlineBox.addInput("date", "deadline", `${item.deadline}`);

    //PRIORITY BOX
    let priorityBox = Box();
    priorityBox.addLabel("h3", "Priority");

    let priorityWrapper = document.createElement("div");
    priorityWrapper.classList.add("priorityWrapper");

    let priorityZero = Box();
    priorityZero.getWrapper().dataset.priority = 0;
    priorityZero.addImg("./IMG/flag0.png", "Low Priority Flag");

    let priorityOne = Box();
    priorityOne.getWrapper().dataset.priority = 1;
    priorityOne.addImg("./IMG/flag1.png", "Medium Priority Flag");

    let priorityTwo = Box();
    priorityTwo.getWrapper().dataset.priority = 2;
    priorityTwo.addImg("./IMG/flag2.png", "High Priority Flag");


    priorityWrapper.append(
        item.priority == 0 ? priorityZero.getWrapper("selected") : priorityZero.getWrapper(),
        item.priority == 1 ? priorityOne.getWrapper("selected") : priorityOne.getWrapper(),
        item.priority == 2 ? priorityTwo.getWrapper("selected") : priorityTwo.getWrapper(),
    )

    priorityBox.getWrapper().appendChild(
        priorityWrapper
    );


    //NOTES BOX
    let noteBox = Box();
    noteBox.addLabel("h3", "Notes");
    noteBox.addTextArea("notes", `${item.notes}`);

    //BUTTONS BOX
    let buttonsBox = Box();
    buttonsBox.addButton("SUBMIT", "submitTask");

    //WRAPPING UP CONTENT
    let formContent = Box();
    formContent.getWrapper().append(
        titleBox.getWrapper("title"),
        descriptionBox.getWrapper("description"),
        deadlineBox.getWrapper("deadline"),
        priorityBox.getWrapper("priority"),
        noteBox.getWrapper("notes"),
        buttonsBox.getWrapper("buttons"),
    )

    container.append(
        containerTitle.getWrapper("containerTitle"),
        formContent.getWrapper("containerContent"),
    );

    container.classList.add("textForm");

    return container;
}


export { createForm, editForm }