import { addElement, getSelector } from "./app.js";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";

const generateProjectInput = () => {
    const createInputContainer = addElement.createDiv(null, "input-container");
    const createInput = addElement.createInput("text", "project-input", "add-project");
    createInput.placeholder = "Enter Your Project Name";

    const createBtnsDiv = addElement.createDiv(null, "input-btns");
    const createConfirmBtn = addElement.createButton("", "confirm-btn", "");
    const createCancelBtn = addElement.createButton("", "cancel-btn", "");
    createBtnsDiv.append(createConfirmBtn, createCancelBtn);

    createInputContainer.append(createInput, createBtnsDiv);

    return createInputContainer
};

const generateProject = () => {
    const getInfo = getSelector.input();

    const createProjectDiv = addElement.createDiv(null, 'project-container');
    const createProject = addElement.createButton(`${getInfo.value}`, 'project-name', 'project-name');

    const createBtnsDiv = addElement.createDiv(null, "project-btns");
    const createRemoveBtn = addElement.createButton("", "remove-btn", "");
    const createEditBtn = addElement.createButton("", "edit-btn");
    createBtnsDiv.append(createRemoveBtn, createEditBtn);

    createProjectDiv.append(createProject, createBtnsDiv);

    return createProjectDiv
};

const generateTaskBtn = () => {
    const createAddButton = addElement.createButton(null, "add-task")
    return createAddButton
};

const generateTaskInput = () => {
    const createInputDiv = addElement.createDiv(null, "task-input-div")

    const createTitleDiv = addElement.createDiv(null, "task-title-container");
    const createTitleInput = addElement.createInput("text", "task-input-title", "task-input-title");
    createTitleInput.placeholder = "Enter Your Task Title"
    createTitleDiv.appendChild(createTitleInput)

    const createDescriptionDiv = addElement.createDiv(null, "task-description-container");
    const createDescriptionInput = addElement.createTextArea("task-input-description", "task-input-description");
    createDescriptionInput.placeholder = "Enter Your Task Description";
    createDescriptionDiv.appendChild(createDescriptionInput);

    const createDateDiv = addElement.createDiv(null, "task-date-container");
    const createDateLabel = addElement.createLabel("task-date", "Due-Date");
    const createDateInput = addElement.createInput("date", "task-input-date", "task-date");
    createDateDiv.append(createDateLabel, createDateInput);

    const createBtnsDiv = addElement.createDiv(null, "input-task-btns");
    const createConfirmBtn = addElement.createButton("", "task-confirm-btn", "");
    const createCancelBtn = addElement.createButton("", "task-cancel-btn", "");
    createBtnsDiv.append(createConfirmBtn, createCancelBtn)

    createInputDiv.append(createTitleDiv, createDescriptionDiv, createDateDiv, createBtnsDiv)

    return createInputDiv

}

const generateTask = () => {
    const getProjectTitle = document.querySelector(".project-title")
    const getTitle = getSelector.getTaskTitle();
    const getDescription = getSelector.getTaskDescription();
    const getDate = getSelector.getTaskDate();

    const createProjectTaskDiv = addElement.createDiv(null, "project-task")
    createProjectTaskDiv.setAttribute("data-selection", getProjectTitle.innerHTML)
    const createTaskDiv = addElement.createDiv(null, "task-container");

    const createTextContainer = addElement.createDiv(null, "task-text-container")
    const createTaskTitle = addElement.createDiv(`${getTitle.value}`, "task-title");
    const createDescription = addElement.createDiv(`${getDescription.value}`, "task-description");

    const taskDate = new Date(getDate.valueAsDate.valueOf() + getDate.valueAsDate.getTimezoneOffset() * 60 * 1000);
    const taskDateFormated = format(new Date(taskDate), "dd/MM/yyyy")
    const createDate = addElement.createDiv(`Due-date: ${taskDateFormated}`, "task-date");

    createTextContainer.append(createTaskTitle, createDescription, createDate)

    const createBtnsDiv = addElement.createDiv(null, "task-btns");
    const createRemoveBtn = addElement.createButton("", "task-remove-btn", "");
    const createEditBtn = addElement.createButton("", "task-edit-btn");
    const createImportantBtn = addElement.createInput("checkbox", "is-important", "is-important")
    createBtnsDiv.append(createRemoveBtn, createEditBtn, createImportantBtn);

    const createIsDoneBtn = addElement.createInput("checkbox", "is-done", "is-done")

    function setStatus() {
        const today = new Date().setHours(0, 0, 0, 0);

        const getDifference = differenceInDays(taskDate, today)
        if (getDifference === 0) {
            createProjectTaskDiv.setAttribute("data-status", "today")
        }
        if (getDifference >= 1 && getDifference <= 7) {
            createProjectTaskDiv.setAttribute("data-status", "sevenDays")
        }
    }

    setStatus()

    createTaskDiv.append(createTextContainer, createBtnsDiv, createIsDoneBtn);
    createProjectTaskDiv.appendChild(createTaskDiv)


    return createProjectTaskDiv
}



export { generateProjectInput, generateProject, generateTaskBtn, generateTaskInput, generateTask };