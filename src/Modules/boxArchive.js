import { Box } from './BaseConstuctor'
import { getTime } from 'date-fns'
import { getDeadline, getRawDeadline, rawTodayDate } from './dates'
import { Storage } from './localStorage'
import { removeDOMItems, editTaskEvent } from './coreEvents'

function createArchiveBox() {
    const wrapper = document.createElement("div");

    const titleBox = Box();
    titleBox.addLabel("h1", "Archive");

    const itemsWrapper = Box();
    loadEveryItems(itemsWrapper.getWrapper());


    const buttonsBox = Box();
    buttonsBox.addButton("+", "+");

    wrapper.append(
        titleBox.getWrapper("titleBox"),
        itemsWrapper.getWrapper("itemsWrapper"),
        buttonsBox.getWrapper("addNewTask")
    );

    wrapper.classList.add("archiveBox");
    return wrapper;
}


function loadEveryItems(itemsWrapper) {

    if (Storage.sortItems().length >= 1) {
        Storage.sortItems().forEach(item => {
            const itemBox = document.createElement("div");
            itemBox.dataset.index = Storage.sortItems().indexOf(item);

            const itemBox__Info = Box();
            itemBox__Info.addLabel("h5", `${item.title}`, "itemTitle");
            itemBox__Info.addLabel("h5", `DEADLINE: ${getDeadline(item.deadline)}`, "itemDeadline");

            if (getTime(getRawDeadline(item.deadline)) < getTime(rawTodayDate)) {
                itemBox__Info.getWrapper().classList.add("expired");
            }

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
                loadEveryItems(itemsWrapper);
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

export {createArchiveBox}