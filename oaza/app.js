import { projects } from './data/projects.js';

const grid = document.querySelector('#project-grid');

if (grid) {
  grid.innerHTML = projects.map(project => `
    <a class="project-card" href="${project.href}" aria-label="${project.title}">
      <div class="project-image ${project.image ? '' : 'project-placeholder'}" ${project.image ? `style="background-image:url('${project.image}')"` : ''}></div>
      <div class="project-copy">
        <div class="project-number">${project.number} / PROJEKT</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <span class="project-link">${project.href === '#' ? 'ROZBUDUJEMY WKRÓTCE →' : 'OTWÓRZ PROJEKT →'}</span>
      </div>
    </a>
  `).join('');
}
