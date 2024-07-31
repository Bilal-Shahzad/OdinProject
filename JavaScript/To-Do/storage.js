export function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
  
  export function loadProjectsFromLocalStorage() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects ? projects.map(projectData => {
      const project = new Project(projectData.name);
      project.todos = projectData.todos.map(todoData => Object.assign(new Todo, todoData));
      return project;
    }) : [];
  }
  