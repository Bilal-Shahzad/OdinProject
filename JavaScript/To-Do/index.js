import { displayProjects, displayTodos } from './dom';
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from './storage';
import { createProject, addTodoToProject, createTodo } from './project';

document.addEventListener('DOMContentLoaded', () => {
  let projects = loadProjectsFromLocalStorage();
  if (projects.length === 0) {
    projects.push(createProject('Default'));
  }

  displayProjects(projects);

  document.getElementById('new-project').addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = e.target.elements['project-name'].value;
    const project = createProject(projectName);
    projects.push(project);
    saveProjectsToLocalStorage(projects);
    displayProjects(projects);
  });

  document.getElementById('new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.elements['todo-title'].value;
    const description = e.target.elements['todo-description'].value;
    const dueDate = e.target.elements['todo-dueDate'].value;
    const priority = e.target.elements['todo-priority'].value;
    const notes = e.target.elements['todo-notes'].value;
    const checklist = e.target.elements['todo-checklist'].value.split(',').map(item => item.trim());
    
    const todo = createTodo(title, description, dueDate, priority, notes, checklist);
    addTodoToProject(project, todo);
    saveProjectsToLocalStorage(projects);
    displayTodos(project.todos);
  });
});
