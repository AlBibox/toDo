import {Box} from './BaseConstuctor'
import {createArchiveBox}  from './boxArchive'


const content = document.querySelector(".content");

function createSidebar() {
    const wrapper = document.createElement("div");

    const archiveBox = Box();
    archiveBox.addImg("./IMG/archive.png", "archive icon");
    archiveBox.addLabel("p", "Archive");

    const todayBox = Box();
    todayBox.addImg("./IMG/today.png", "today icon");
    todayBox.addLabel("p", "Today");

    const thisWeek = Box();
    thisWeek.addImg("./IMG/week.png", "week icon")
    thisWeek.addLabel("p", "This week");

    wrapper.append(
        archiveBox.getWrapper("archive"),
        todayBox.getWrapper("today"),
        thisWeek.getWrapper("thisWeek")
        );


    wrapper.classList.add("sidebar");
    return wrapper
}



function createMainBox() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("mainBox");
    return wrapper;
}



function loadHomePage() {
    const homeWrapper = document.createElement("div");
    const sidebar = createSidebar();
    const archiveBox = createArchiveBox();
    const mainBox = createMainBox();

    mainBox.appendChild(archiveBox);
    
    homeWrapper.append(
        sidebar,
        mainBox
    );

    homeWrapper.classList.add("homeWrapper");
    content.appendChild(homeWrapper);

    return homeWrapper;
}






export {loadHomePage}