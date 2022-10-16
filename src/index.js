import "./style.css"
import {start} from "./manageProject.js"
import {showAllTasks, showTodayTasks, showSevenDaysTasks, showImportantTasks} from "./manageTasks.js"
import { getSelector } from "./app";


const addProjectSelector = document.querySelector(".add-project");
const allTasks = document.getElementById("all-tasks");
const todayTasks = document.getElementById("today");
const sevenDaysTasks = document.getElementById("next-7");
const isImportant = document.getElementById("important");
const projectsContainer= document.querySelector(".projects-container");


const storedProjects = localStorage.getItem("project")
const storedTasks = localStorage.getItem("task")

addProjectSelector.addEventListener("click", e => {
    start()   
});

allTasks.addEventListener("click", e => {
    showAllTasks()
});

todayTasks.addEventListener("click", e => {
    showTodayTasks()
});

sevenDaysTasks.addEventListener("click", e => {
    showSevenDaysTasks()
});

isImportant.addEventListener("click", e => {
    showImportantTasks()
});

const getStored = () => {
    
}

getStored()
