import {getSelector} from "./app.js";
import {generateProjectInput, generateProject, generateTaskBtn} from "./generateDom.js";
import {addTaskInput} from "./manageTasks.js";

const taskTitleSelector = document.querySelector(".project-title");
const inputsContainer = document.querySelector(".inputs-container");
const btnContainer = document.querySelector(".btn-container");
const projectsContainer= document.querySelector(".projects-container");

const addProject = () => {
    const inputContainer = getSelector.projectInput()
    const input = getSelector.input()
    const confirmBtns = getSelector.confirmBtn()
    const cancelBtn = getSelector.cancelBtn()
    
    confirmBtns.forEach(confirmBtn => {
        confirmBtn.addEventListener('click', e => {
            if(input.value !== '') {
                projectsContainer.appendChild(generateProject())
                e.target.parentElement.parentElement.remove()
                manageProjects(inputContainer)
            }
            else { 
                e.target.parentElement.parentElement.remove()
            }
        });
    })
       
    cancelBtn.addEventListener('click', e => {
        e.target.parentElement.parentElement.remove()
    })    
};

const editProject = (e, inputContainer) => {
    const projectContainer = e.target.parentElement.parentElement
    projectContainer.replaceWith(inputContainer)
}

const manageProjects = (inputContainer) => {
    const removeBtns = getSelector.removeBtn()
    const editBtns = getSelector.editBtn()
    const getProjects = getSelector.getProject()
    
    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', e => {
            e.target.parentElement.parentElement.remove()
            taskTitleSelector.textContent = "All Tasks"
        })
    })
    
    editBtns.forEach(editBtn => {
        editBtn.addEventListener('click', e => {
            const input = getSelector.input()
            editProject(e, inputContainer)
        })
    })

    getProjects.forEach(getProject => {
        getProject.addEventListener('click', e => {
            if(btnContainer.innerHTML === "") {
                btnContainer.appendChild(generateTaskBtn())
            }

            taskTitleSelector.innerHTML = e.target.textContent
            addTaskInput()
            showActiveProjects(e)
            showTasks(getProject, e)
            btnContainer.style.display = "inline"
        })
    })
}

const start = () => {
    if(inputsContainer.innerHTML == "") {
        inputsContainer.appendChild(generateProjectInput()) 
        addProject()
    }
};

const showTasks = (getProject, e) => {
    const taskId = document.querySelectorAll("[data-selection]")
    taskId.forEach(id => {
        const project = id.dataset.selection
        if(getProject.innerHTML === project){
            id.style.display = "inline" 
        }
        else {
            id.style.display = "none"            
        }
    })
}

const showActiveProjects = (e) => {    
    const getContainers = document.querySelectorAll(".project-container")
    const projectContainer = e.target.parentElement

    function addClass() {
        removeClass()
        projectContainer.classList.add("active")
    }

    function removeClass() {
        getContainers.forEach(container => {
            container.classList.remove("active")
        })
    }
    
    addClass()
}

export {start};