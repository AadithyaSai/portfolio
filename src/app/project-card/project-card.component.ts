import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input({ required: true }) project: any;
}
