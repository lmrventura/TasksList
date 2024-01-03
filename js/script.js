function addTask() {

    const taskTitle = document.querySelector("#task-title").value;//get input value
    console.log(taskTitle)

	    if(taskTitle) {
       const templateTaskLi = document.querySelector(".template");
       const newTask = templateTaskLi.cloneNode(true); 
       
       newTask.querySelector(".task-title").textContent = taskTitle;
       
       newTask.classList.remove("template");
       newTask.classList.remove("hide");
       
       const ul = document.querySelector("#task-list"); //add task to ul
       ul.appendChild(newTask);
        
       doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
        completeTask(this);
       });

       removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
        removeTask(this);
       });
    }    

}

function completeTask(doneBtn) {
    //console.log(doneBtn)
    const completedTask = doneBtn.parentNode;
    completedTask.classList.toggle("done"); //if there is. If not, take it out.
}

function removeTask(removeBtn) {
    //console.log(removeBtn)
    removeBtn.parentNode.remove(true);
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addTask();
});