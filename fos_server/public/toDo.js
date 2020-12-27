const subjectList = document.querySelector(".aloneToDoBox .subjectList"),
    subjectBox = document.querySelector(".aloneToDoBox .subjectBox.hide"),
    subjectToggle = document.querySelector(".aloneToDoBox .subjectBox.hide .subjectTitle span.toggle"),
    toDoBox = document.querySelector(".aloneToDoBox .subjectBox.hide .details"),
    subjectAddButton = document.querySelector(".aloneToDoBox .subjectAddButton"),
    subjectDeleteBtn = document.querySelector(".aloneToDoBox .subjectBox.hide .subjectTitle .deleteButton"),
    toDoListUl = document.querySelector(".aloneToDoBox .subjectBox.hide .details ul"),
    toDoLi = document.querySelector(".aloneToDoBox .subjectBox.hide .details ul li"),
    toDoAddButton = document.querySelector(".aloneToDoBox .subjectBox.hide .details .toDoAddButton"),
    toDoDeleteButton = document.querySelector(".aloneToDoBox .subjectBox.hide .details li .deleteButton"),
    aloneStartBtn = document.querySelector(".aloneToDoBox .subjectTitle button");

function openAloneStudyPage(){
    const option = "width=350px, height=500px";

    window.open("./popup_studying.html", "popup_studying", option);
}

function init(){
    addSubjectEvent();
    subjectToggle.onclick = clickToggleEvent;
    // subjectAddButton.onclick = addSubjectEvent;
    subjectDeleteBtn.onclick = deleteSubjectEvent;
    toDoAddButton.onclick = addToDoEvent;
    toDoDeleteButton.onclick = deleteToDoEvent;
    // aloneStartBtn.onclick = openAloneStudyPage;

}

function clickToggleEvent(e){
    const toggleBtn = e.currentTarget;
    const toDoBox = toggleBtn.parentNode.nextElementSibling;
    // console.log(toggleBtn.parentNode.nextElementSibling);

    if(toggleBtn.innerHTML === "🔼"){
        toggleBtn.innerHTML = "🔽";
    } else {
        toggleBtn.innerHTML = "🔼"
    }

    toDoBox.classList.toggle("open");
}

function addSubjectEvent(e){
    const addedSubject = subjectBox.cloneNode(true);

    const subjectDeleteBtn = addedSubject.firstElementChild.lastElementChild;
    subjectDeleteBtn.onclick = deleteSubjectEvent;

    const toggleBtn = addedSubject.firstElementChild.childNodes[3];
    toggleBtn.onclick = clickToggleEvent;

    // const aloneStartBtn = toggleBtn.nextElementSibling;
    // aloneStartBtn.onclick = openAloneStudyPage;
    
    const newToDoAddButton = addedSubject.lastElementChild.lastElementChild;
    // console.log(newToDoAddButton);
    newToDoAddButton.onclick = addToDoEvent;

    const toDoDeleteButton = newToDoAddButton.previousElementSibling.firstElementChild.lastElementChild;
    toDoDeleteButton.onclick = deleteToDoEvent;
    addedSubject.classList.remove("hide");
    // console.log(addedSubject.firstElementChild.childNodes[3]);
    // console.log(addedSubject.firstElementChild.lastElementChild);
    subjectList.appendChild(addedSubject);
}

function deleteSubjectEvent(e){
    // console.log(e.currentTarget);

    const clickedSubject = e.currentTarget.parentNode.parentNode;
    subjectList.removeChild(clickedSubject);
}

function addToDoEvent(e){
    const addedToDo = toDoLi.cloneNode(true);
    const clickedToDoUl = e.currentTarget.previousElementSibling;
    clickedToDoUl.appendChild(addedToDo);
    const newToDoDeleteButton = clickedToDoUl.lastElementChild.lastElementChild;
    // console.log(newToDoDeleteButton);
    newToDoDeleteButton.onclick = deleteToDoEvent;
}

function deleteToDoEvent(e) {
    const clickedLi = e.currentTarget.parentNode,
        clickedToDoUl = clickedLi.parentNode;

    // console.log(clickedLi);

    clickedToDoUl.removeChild(clickedLi);
}

init();
