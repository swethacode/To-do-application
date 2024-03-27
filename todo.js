function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var task = document.createElement("li");
    task.className = "task";
    task.innerHTML = taskInput.value + ' <button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(task);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

function deleteTask(element) {
  element.parentNode.remove();
}
