import {getSelector} from "./app.js";
import {generateTaskInput, generateTask} from "./generateDom.js";

const taskInputContainer = document.querySelector(".task-input");
const tasksContainer = document.querySelector(".tasks-container");
const btnContainer = document.querySelector(".btn-container");
const projectTitle = document.querySelector(".project-title");

const addTaskInput = () => {
    const taskBtn = getSelector.taskBtn()
    taskBtn.addEventListener('click', e => {
        if(taskInputContainer.innerHTML === "") {
            taskInputContainer.append(generateTaskInput())
            addNewTask()
        }
    })
};

const addNewTask = () => {
    const confirmBtn = getSelector.confirmTaskBtn()
    const cancelBtn = getSelector.cancelTaskBtn()
    
    confirmBtn.addEventListener('click', e => {
        tasksContainer.append(generateTask());
        manageTask()
        taskInputContainer.innerHTML = ""
    })

    cancelBtn.addEventListener('click', e => {
        taskInputContainer.innerHTML = ""
    })
};

const editTask = (e) => {
    taskInputContainer.append(generateTaskInput())
    const confirmBtn = getSelector.confirmTaskBtn()
    const cancelBtn = getSelector.cancelTaskBtn()
    const getTaskTitle = getSelector.getTaskTitle()
    const getTaskDescription = getSelector.getTaskDescription()

    const task = e.target.parentElement.parentElement.parentElement

    const taskTextContainer = e.target.parentElement.previousElementSibling
    taskTextContainer.style.opacity = "0.2"
    
    const taskTitle = taskTextContainer.firstChild
    const taskDescription = taskTitle.nextElementSibling

    getTaskTitle.value = taskTitle.innerHTML
    getTaskDescription.value = taskDescription.innerHTML
    
    confirmBtn.addEventListener('click', e => {
        tasksContainer.append(generateTask());
        manageTask()
        taskTextContainer.style.opacity = "1"
        task.remove()
        taskInputContainer.innerHTML = ""
    })

    cancelBtn.addEventListener('click', e => {
        taskInputContainer.innerHTML = ""
        taskTextContainer.style.opacity = "1"
    })
};

const manageTask = () => {
    const editBtns = getSelector.editTaskBtn()
    const removeBtns = getSelector.removeTaskBtn()
    const importantBtns = getSelector.getImportantBtn()
    
    editBtns.forEach(editBtn => {
        editBtn.addEventListener("click", e => {
        editTask(e)
        })
    })

    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener("click", e => {
        e.target.parentElement.parentElement.remove()
        })
    })

    importantBtns.forEach(importantBtn => {
        importantBtn.addEventListener("click", e => {
            const getTask = e.target.parentElement.parentElement.parentElement
            isImportant(importantBtn, getTask)
        })      
    })
};

const isImportant = (importantBtn, getTask) => {
    if(importantBtn.checked === true) {
        getTask.setAttribute("data-important", "yes")
    }
    else {
        getTask.setAttribute("data-important", "no")
    }
};

const showAllTasks = () => {
    const allTasks = getSelector.getAllTasks()
    btnContainer.style.display = "none"
    allTasks.forEach(task => {
        task.style.display = "inline" 
        tasksContainer.appendChild(task)
        projectTitle.innerHTML = "All Tasks"
    })
};

const showTodayTasks = () => {
    const getTasks = getSelector.getAllTasks()
    btnContainer.style.display = "none"
    projectTitle.innerHTML = "Today"
    getTasks.forEach(task => {
        const taskStatus = task.dataset.status
       if(taskStatus == "today") {
           task.style.display = "inline"
       }
       else {
           task.style.display = "none"
       }
    })
};

const showSevenDaysTasks = () => {
    const getTasks = getSelector.getAllTasks()
    btnContainer.style.display = "none"
    projectTitle.innerHTML = "Next 7 Days"
    getTasks.forEach(task => {
        const taskStatus = task.dataset.status
        if(taskStatus == "sevenDays") {
           task.style.display = "inline"
        }
        else {
           task.style.display = "none"
        }
    })
};

const showImportantTasks = () => {
    const getTasks = getSelector.getAllTasks()
    btnContainer.style.display = "none"
    projectTitle.innerHTML = "Important"
    getTasks.forEach(task => {
        const taskStatus = task.dataset.important
        if(taskStatus == "yes") {
           task.style.display = "inline"
        }
        else {
           task.style.display = "none"
        }
    })
};

export {addTaskInput, addNewTask, showAllTasks, showTodayTasks, showSevenDaysTasks, showImportantTasks};


