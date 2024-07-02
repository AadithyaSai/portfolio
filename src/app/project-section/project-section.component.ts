import { Component } from '@angular/core';
import { LeftPaneComponent } from '../left-pane/left-pane.component';
import { RightPaneComponent } from '../right-pane/right-pane.component';

@Component({
  selector: 'portfolio-project-section',
  standalone: true,
  imports: [LeftPaneComponent, RightPaneComponent],
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {}
