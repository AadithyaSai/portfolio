import { Component } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'portfolio-project-section',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {}
