document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const task = todoInput.value.trim();
    if (task === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";
  }
});
