import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { HeaderComponent } from '../header/header.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'portfolio-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProjectSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
