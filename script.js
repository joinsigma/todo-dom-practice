const todos = [
  {
    title: "Learn JavaScript",
    isCompleted: true,
    isPriority: false,
  },
  {
    title: "Learn DOM",
    isCompleted: false,
    isPriority: false,
  },
  {
    title: "Walk the dog",
    isCompleted: false,
    isPriority: true,
  },
  {
    title: "Take a selfie with a squirrel",
    isCompleted: true,
    isPriority: false,
  },
];

function syncTodosToDOM() {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("task-item");

    if (todo.isPriority) {
      todoItem.classList.add("priority");
    }

    if (todo.isCompleted) {
      todoItem.classList.add("completed");
    }

    todoItem.innerHTML = `
            <input type="checkbox" 
                onchange="toggleTodo(${index})" 
                ${todo.isCompleted ? "checked" : ""}
            />
            <p>${todo.title}</p>
            <button 
                class="prioritize-btn" 
                onclick="togglePriority(${index})"
            >Prioritize</button>
            <button class="delete-btn" 
                onclick="removeTodo(${index})"
            >Delete</button>
        `;

    taskList.appendChild(todoItem);
  });

  // Save the Single source of truth (todos) into localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const input = document.querySelector(".add-todo-form input");
  const value = input.value;
  if (value === "") {
    alert("No empty string ok?");
    return;
  }

  const newTodo = {
    title: value,
    isCompleted: false,
    isPriority: false,
  };

  todos.push(newTodo);
  syncTodosToDOM();

  input.value = "";
}

function removeTodo(index) {
  todos.splice(index, 1);
  syncTodosToDOM();
}

function toggleTodo(index) {
  todos[index].isCompleted = !todos[index].isCompleted;
  syncTodosToDOM();
}

function togglePriority(index) {
  todos[index].isPriority = !todos[index].isPriority;
  syncTodosToDOM();
}

// Prevent form refresh
const form = document.querySelector(".add-todo-form");
form.addEventListener("submit", (e) => e.preventDefault());

// Create todos on initial page load
syncTodosToDOM();
