const addElement = (() => {
    const createHeader = (text, className) => {
        const create = document.createElement("header")
        create.textContent = text
        create.classList.add(className)
        return create
    };

    const createNav = (text, className) => {
        const create = document.createElement("nav")
        create.textContent = text
        create.classList.add(className)
        return create
    };

    const createMain = (text, className) => {
        const create = document.createElement("main")
        create.textContent = text
        create.classList.add(className)
        return create
    };    

    const createFooter = (text, className) => {
        const create = document.createElement("footer")
        create.textContent = text
        create.classList.add(className)
        return create
    };  

    const createP = (text) => {
        const create = document.createElement("p")
        create.textContent = text
        return create
    };

    const createDiv = (text, className, idName) => {
        const create = document.createElement("div")
        create.textContent = text
        create.classList.add(className)
        create.setAttribute("id", idName)
        return create
    };
    
    const createButton = (text, className, idName) => {
        const create = document.createElement("button")
        create.textContent = text
        create.classList.add(className)
        create.setAttribute("id", idName)
        return create
    };    
    
    const createImg = (source, alt, className) => {
        const create = document.createElement("img")
        create.src = source
        create.alt = alt
        create.classList.add(className)
        return create
    };    
    
    const createInput = (type, idName, inputName) => {        
        const create = document.createElement("input")
        create.type = type
        create.setAttribute("id", idName) 
        create.setAttribute("name", inputName)
        return create
    };

    const createLabel = (labelFor, text) => {
        const create = document.createElement("label")
        create.setAttribute("for", labelFor)
        create.innerHTML = text
        return create
    };       

    const createTextArea = (idName , name) => {        
        const create = document.createElement("textarea")
        create.setAttribute("id", idName) 
        create.setAttribute("name", name)
        return create
    };

    return {
      createHeader,
      createNav,
      createMain,
      createFooter,
      createP,
      createDiv,
      createButton,
      createImg,
      createInput,
      createLabel,
      createTextArea
    };
  })();

const getSelector = (() => {
    const projectInput = () => {
        return document.querySelector(".input-container")
    }

    const input = () => {
        return document.getElementById("project-input")
    };

    const confirmBtn = () => {
        return document.querySelectorAll(".confirm-btn")
    };

    const cancelBtn = () => {
        return document.querySelector(".cancel-btn")
    };    

    const getProjectBtns = () => {
        return document.querySelector(".project-btns")
    };

    const editBtn = () => {
        return document.querySelectorAll('.edit-btn')
    };  
    
    const removeBtn = () => {
        return document.querySelectorAll('.remove-btn')
    };

    const projectContainer = () => {
        return document.querySelector(".project-container")
    }

    const getProject = () => {
        return document.querySelectorAll(".project-name")
    };

    const getTaskContainer = () => {
        return document.querySelectorAll(".task-container")
    };

    const getTaskTextContainer = () => {
        return document.querySelector(".task-text-container")
    };

    const getTaskTitle = () => {
        return document.getElementById("task-input-title")
    };
    
    const getTaskDescription = () => {
        return document.getElementById("task-input-description")
    };

    const getTaskDate = () => {
        return document.getElementById("task-input-date")
    };
    
    const taskBtn = () => {
        return document.querySelector(".add-task")
    };

    const confirmTaskBtn = () => {
        return document.querySelector(".task-confirm-btn")
    };

    const cancelTaskBtn = () => {
        return document.querySelector(".task-cancel-btn")
    };

    const editTaskBtn = () => {
        return document.querySelectorAll(".task-edit-btn")
    };

    const removeTaskBtn = () => {
        return document.querySelectorAll(".task-remove-btn")
    };

    const getAllTasks = () => {
        return document.querySelectorAll(".project-task")
    };

    const getImportantBtn = () => {
        return document.querySelectorAll("#is-important")
    };

    return {
        projectInput,
        input,
        confirmBtn,
        cancelBtn,
        getProjectBtns,
        editBtn,
        removeBtn,
        projectContainer,
        getProject,
        getTaskContainer,
        getTaskTextContainer,
        getTaskTitle,
        getTaskDescription,
        getTaskDate,
        taskBtn,
        confirmTaskBtn,
        cancelTaskBtn,
        editTaskBtn,
        removeTaskBtn,
        getAllTasks,
        getImportantBtn
    };
    })();
  
export {addElement, getSelector};