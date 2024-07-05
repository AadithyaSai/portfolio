import { Component, Input } from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
  year: string;
  link: string;
  github: string;
  technologies: string[];
}

@Component({
  selector: 'portfolio-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
