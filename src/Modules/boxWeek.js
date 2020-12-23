import { Box } from './BaseConstuctor'
import { getDeadline, weekStartDate, weekEndDate } from './dates'
import { ToDoList } from './ToDoItems'
import { removeDOMItems, editTaskEvent } from './coreEvents'


function createWeekBox() {
    const wrapper = document.createElement("div");

    const titleBox = Box();
    titleBox.addLabel("h1", "This Week");
    titleBox.addLabel("h3", `${weekStartDate} - ${weekEndDate}`);


    const itemsWrapper = Box();
    loadWeeklyItems(itemsWrapper.getWrapper());

    const buttonsBox = Box();
    buttonsBox.addButton("+", "+");

    wrapper.append(
        titleBox.getWrapper('titleBox'),
        itemsWrapper.getWrapper("itemsWrapper"),
        buttonsBox.getWrapper("addNewTask")
    );


    wrapper.classList.add("weekBox");

    return wrapper;
}

function loadWeeklyItems(itemsWrapper) {

    if (ToDoList.getWeeklyItems().length >= 1) {
        ToDoList.getWeeklyItems().forEach(item => {
            const itemBox = document.createElement("div");
            itemBox.dataset.index = ToDoList.sortItems().indexOf(item);

            const itemBox__Info = Box();
            itemBox__Info.addLabel("h5", `${item.title}`, "itemTitle");
            itemBox__Info.addLabel("h5", `DEADLINE: ${getDeadline(item.deadline)}`, "itemDeadline");

            const itemBox__Priority = Box();
            if (item.priority == 0) {
                itemBox__Priority.addImg("./IMG/flag0.png");
            } else if (item.priority == 1) {
                itemBox__Priority.addImg("./IMG/flag1.png");
            } else {
                itemBox__Priority.addImg("./IMG/flag2.png");
            }

            const itemBoxInteractions = document.createElement("div");
            itemBoxInteractions.classList.add("itemInteractions");

            const editItem = Box();
            editItem.addImg("./IMG/edit.png");

            const deleteItem = Box();
            deleteItem.addImg("./IMG/delete.png");

            deleteItem.getWrapper().addEventListener("click", () => {
                removeDOMItems(itemBox.dataset.index);
                loadWeeklyItems(itemsWrapper);
            });

            editItem.getWrapper().addEventListener("click", () => {
                editTaskEvent(itemBox.dataset.index);
            });


            itemBoxInteractions.append(
                editItem.getWrapper('editItem'),
                deleteItem.getWrapper('deleteItem'),
            )

            itemBox.append(
                itemBox__Priority.getWrapper('itemPriority'),
                itemBox__Info.getWrapper('itemInfo'),
                itemBoxInteractions
            );

            itemBox.classList.add('singleItem');
            itemsWrapper.append(itemBox);

        });
    }

}

export {createWeekBox}