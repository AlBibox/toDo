import {Box} from './BaseConstuctor'


function createForm() {
    const container = document.createElement("div"); //formContainer

    let titleBox = Box();
    titleBox.addLabel("h3", "Title");
    titleBox.addInput("text", "title");

    let descriptionBox = Box();
    descriptionBox.addLabel("h3", "Description");
    descriptionBox.addInput("text", "description");

    let dueDateBox = Box();
    dueDateBox.addLabel("h3", "Due Date");
    dueDateBox.addInput("date", "dueDate");

    let priorityBox = Box();
    priorityBox.addLabel("h3", "Priority");

    let select = priorityBox.addSelect("priority");
    select.addOption("0", "0");
    select.addOption("1", "1");
    select.addOption("2", "2");

    let noteBox = Box();
    noteBox.addLabel("h3", "Notes");
    noteBox.addTextArea("notes");

    let buttonsBox = Box();
    buttonsBox.addButton("ADD TASK", "addTask");

    container.append(
        titleBox.getWrapper("title"),
        descriptionBox.getWrapper("description"),
        dueDateBox.getWrapper("dueDate"),
        priorityBox.getWrapper("priority"),
        noteBox.getWrapper("notes"),
        buttonsBox.getWrapper("buttons"),
        );
    
    container.classList.add("textForm");

    return container;
}

export {createForm}