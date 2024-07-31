export function displayProjects(projects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
  
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project.name;
      projectElement.addEventListener('click', () => displayTodos(project.todos));
      projectList.appendChild(projectElement);
    });
  }
  
  export function displayTodos(todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
  
    todos.forEach(todo => {
      const todoElement = document.createElement('div');
      todoElement.textContent = `${todo.title} (Due: ${todo.dueDate})`;
  
      if (todo.priority === 'high') {
        todoElement.style.color = 'red';
      }
  
      todoElement.addEventListener('click', () => expandTodoDetails(todo));
      todoList.appendChild(todoElement);
    });
  }
  
  export function expandTodoDetails(todo) {
    const todoDetails = document.getElementById('todo-details');
    todoDetails.innerHTML = `
      <h2>${todo.title}</h2>
      <p>${todo.description}</p>
      <p>Due: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <p>Notes: ${todo.notes}</p>
      <p>Checklist: ${todo.checklist.join(', ')}</p>
      <button id="toggle-complete">${todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
      <button id="delete-todo">Delete</button>
    `;
  
    document.getElementById('toggle-complete').addEventListener('click', () => {
      todo.toggleComplete();
      expandTodoDetails(todo);
    });
  
    document.getElementById('delete-todo').addEventListener('click', () => {
      // Logic to delete todo from project
    });
  }
  