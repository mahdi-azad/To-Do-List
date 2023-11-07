document.addEventListener("DOMContentLoaded", function () {

//input tag
const taskInput = document.getElementById("task")
//button tag
const addTaskButton = document.getElementById("addtask")
//ul tag
const taskList = document.getElementById("taskList")

// Event listener for button

addTaskButton.addEventListener("click", function() {

    // This if statement is so blank input fields cannot be added as a task
    if (taskInput.value !== "") {
    // first step: connecting the input value const we made earlier into this click event function const
    const taskText = taskInput.value

    // second step: adding the input values into the list
    const taskItem = document.createElement("li")

    //Inserting the value into the HTML
    taskItem.innerHTML = `${taskText} <span id="delete">Delete</span>`

    // adding a child inside a parent aka adding an LI to UL
    taskList.appendChild(taskItem)

    // remove functionality starts
    const deleteButton = taskItem.querySelector("#delete")
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskItem)
    })
    // remove functionality ends

    //This resets the input after a task is added
    // document.querySelector('#task').value = '';
    taskInput.value = '';
}
    

})
})

