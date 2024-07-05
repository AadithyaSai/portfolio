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
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco',
      image: 'https://via.placeholder.com/150',
      year: '2023',
      link: 'https://example.com',
      github: 'https://example.com',
      technologies: ['react', 'js'],
    },
    {
      title: 'Project 2',
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco',
      image: 'https://via.placeholder.com/150',
      year: '2022',
      link: 'https://example.com',
      github: 'https://example.com',
      technologies: ['react', 'ts', 'python', 'django'],
    },
    {
      title: 'Project 3',
      description:
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.',
      image: 'https://via.placeholder.com/150',
      year: '2021',
      link: 'https://example.com',
      github: 'https://example.com',
      technologies: ['react', 'js', 'angular'],
    },
  ];

  panels = viewChildren(PanelComponent, { read: ElementRef });

  constructor(protected element: ElementRef) {
    this.element = element;
  }

  ngAfterViewInit() {
    const leftPanel = this.panels()[0];
    const rightPanel = this.panels()[1];

    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: 'top top',
        end: () => 'bottom 60%',
        pin: leftPanel.nativeElement,
        pinSpacing: false,
        // markers: true,
        scrub: 1,
      },
    });

    scrollTl.from(leftPanel.nativeElement, {
      opacity: 0,
      x: '-50',
      duration: 1,
    });
    scrollTl.from(
      rightPanel.nativeElement,
      {
        opacity: 0,
        duration: 1,
      },
      0.5
    );

    scrollTl.to(
      this.element.nativeElement,
      {
        opacity: 0,
        duration: 1,
      },
      '+=2'
    );
  }
}
