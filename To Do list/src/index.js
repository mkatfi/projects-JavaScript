import "./styles.css";

// Select necessary elements
let input = document.querySelector(".form-side .input");
let submit = document.querySelector(".form-side .add");
let tasksDiv = document.querySelector(".form-side .tasks");
let mainDiv = document.querySelector(".main");
let container = document.querySelector(".container");
let formAddTask = document.querySelector(".form-add-task");
let modal = document.querySelector(".modal-form");

// Task management data
const projects = JSON.parse(localStorage.getItem("main")) || [];

let arrayOfTasks = JSON.parse(localStorage.getItem("tasks")) || [];
getDataFromLocalStorage();

// Add task event
submit.onclick = function () {
    if (input.value.trim() !== "") {
        addTaskToArray(input.value.trim());
        input.value = "";
    }
};

// Handle task actions
tasksDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        let taskId = e.target.parentElement.getAttribute("data-id");
        deleteTask(taskId);
        e.target.parentElement.remove();
    }
});

function addTaskToArray(taskText) {
    const task = { 
      id: Date.now(), 
      title: taskText, 
      completed: false 
    };
    arrayOfTasks.push(task);
    updateLocalStorage();
    renderTasks(arrayOfTasks);
}

function renderTasks(tasks) {
    tasksDiv.innerHTML = "";
    tasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.id);
        div.textContent = task.title;
        
        let add = document.createElement("span");
        add.className = "addtask";
        add.textContent = "Add";

        add.addEventListener("click", (e) => {
          // Remove "active" class from all tasks
          document.querySelectorAll(".task").forEach(task => {
            task.classList.remove("active");
          });
        
          // Toggle "active" class on the clicked task
          e.target.parentElement.classList.toggle("active");
    
        
          // Open the modal with the selected task's ID
          openTaskModal(e.target.parentElement.getAttribute("data-id"));
        });
        
        let del = document.createElement("span");
        del.className = "del";
        del.textContent = "Delete";
        
        div.append(add, del);
        tasksDiv.appendChild(div);
    });
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function updateLocalStoragebox() {
    if (projects.length) {
        localStorage.setItem("main", JSON.stringify(projects));
    }
}
function getDataFromLocalStorage() {
    renderTasks(arrayOfTasks);
}

function deleteTask(taskId) {
    console.log(projects.ids);
    console.log(taskId);
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    if(projects.length){
       
        projects.forEach((project) => {
            project.ids = project.boxs.filter((task) => task.ids != taskId);
        });
      
    }
    updateLocalStorage();
    updateLocalStoragebox();
}


function deleteTaskbox(taskId) {
    projects.forEach((project) => {
        console.log(project);
        project.boxs = project.boxs.filter((task) => task.data != taskId);
    });

    updateLocalStoragebox();
}


function openTaskModal(taskId) {
    modal.style.display = "flex";
    modal.setAttribute("data-id", taskId);
}

let id = modal.getAttribute("data-id");
// Handle form submission
formAddTask.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = formAddTask.querySelector("input[name='title']").value.trim();
    let description = formAddTask.querySelector("textarea[name='description']").value.trim();
    let date = formAddTask.querySelector("input[name='date']").value.trim();
    let priority = document.querySelector("select[name='priority']").value.trim();
    let data =Date.now();

    if (!title || !description || !date || !priority) return;
    
    let project = projects.find((proj) => String(proj.ids) === String(id)) || { ids: id, boxs: [] };
    if (!projects.includes(project)) projects.push(project);
    
    if (!project.boxs.some(task => task.title === title && task.description === description)) {
        project.boxs.push({ title, description, dueDate: date , priority , data});
    }
    updateLocalStoragebox();
    
    modal.style.display = "none";
    formAddTask.reset();

    renderProjectTasks(project, id);

});

let openwindow = document.querySelector("action");
if (openwindow){
    renderProjectTasks(project, id);
}

function renderProjectTasks(project, id) {
    mainDiv.innerHTML = "";
    project.boxs.forEach(task => {
        
        let box = document.createElement("div");
        box.className = "box";
        box.setAttribute("data-id", id);
        let option = document.createElement("div");
        option.className = "option";
        option.textContent = task.priority;

        if (task.priority === "High") {
          option.style.backgroundColor = "red";
        } 
        else if (task.priority === "Medium") {
          option.style.backgroundColor = "yellow";
        }
        else if(task.priority === "Low") {
          option.style.backgroundColor = "green";
        }
        let title = document.createElement("h1");
        title.className = "title";
        title.textContent = task.title;
        
        let description = document.createElement("p");
        description.className = "description";
        description.textContent = task.description;
        
        let date = document.createElement("p");
        date.className = "date";
        date.textContent = task.dueDate;
        
        let buttons = document.createElement("div");
        buttons.className = "buttons";
        
        let checked = document.createElement("button");
        checked.className = "checked";
        checked.textContent = "UnChecked";
        
        let del = document.createElement("button");
        del.className = "delete";
        del.textContent = "Delete";
        del.addEventListener("click", () => box.remove());
        
        
        checked.addEventListener("click", (e) => {
            if (e.target.classList.contains("checked")) {
                box.classList.toggle("done");
            }
            // checked.textContent = "Checked";
            checked.classList.toggle("completed");
            if (checked.classList.contains("completed")) {
            title.style.textDecoration = "line-through";
            description.style.textDecoration = "line-through";
            date.style.textDecoration = "line-through";
            setTimeout(() => {
                box.remove();
                deleteTaskbox(task.data);
            }, 1000);
            } else {
            title.style.textDecoration = "none";
            description.style.textDecoration = "none";
            date.style.textDecoration = "none";
            }
            updateLocalStoragebox();
        });
        // console.log(task.priority);

        buttons.append(checked, del, option);
        box.append(title, description, date, buttons);
        mainDiv.appendChild(box);
    });
  
}

