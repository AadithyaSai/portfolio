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
      title: 'Asteroids',
      description:
        'The classic arcade game, made with Pixi.JS. Fly through space, shooting down asteroids. Compete with your friends for the highest score!',
      image: './asteroids.png',
      year: '2024',
      link: 'https://aadithyasai.github.io/Asteroids/',
      github: 'https://www.github.com/AadithyaSai/Asteroids',
      technologies: ['TypeScript', 'Pixi.JS', 'Vite'],
    },
    {
      title: 'AlgoCanvas',
      description:
        'An interactive canvas for visualising various computer graphics algorithms. Create the perfect pixel art while exploring classic Computer Graphics algorithms. Learn while having fun!',
      image: './algocanvas.png',
      year: '2024',
      link: 'https://aadithyasai.github.io/AlgoCanvas/',
      github: 'https://www.github.com/AadithyaSai/AlgoCanvas',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    },
    {
      title: 'coderun',
      description:
        'Bash script to easily compile and run files. Currently supports C/C++ and Java with more coming soon.',
      image: './coderun.png',
      year: '2023',
      link: 'https://github.com/AadithyaSai/coderun',
      github: 'https://github.com/AadithyaSai/coderun',
      technologies: ['Bash', 'Linux'],
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
        end: 'bottom top',
        pin: leftPanel.nativeElement,
        pinSpacing: true,
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
      leftPanel.nativeElement,
      {
        opacity: 0,
        x: '-50',
        duration: 1,
      },
      '+=2'
    );
    scrollTl.to(
      this.element.nativeElement,
      {
        opacity: 0,
        duration: 1,
      },
      '<'
    );
  }
}
