import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';

@Component({
  selector: 'portfolio-landing-page',
  standalone: true,
  imports: [HeroSectionComponent, ProjectSectionComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
