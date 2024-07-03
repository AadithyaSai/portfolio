import { Component, ElementRef, viewChildren } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';
import { gsap } from '../utils/gsap';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'portfolio-project-section',
  standalone: true,
  imports: [PanelComponent, ProjectCardComponent, NgFor],
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  panels = viewChildren(PanelComponent, { read: ElementRef });

  constructor(protected element: ElementRef) {
    this.element = element;
  }

  ngAfterViewInit() {
    const leftPanel = this.panels()[0];
    const rightPanel = this.panels()[1];

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: 'top top',
        end: () => 'bottom 80%',
        pin: leftPanel.nativeElement,
        pinSpacing: false,
        markers: true,
        // scrub: 1,
      },
    });
  }
}
