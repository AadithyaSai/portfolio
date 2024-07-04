import { Component, ElementRef, viewChild } from '@angular/core';
import { gsap } from '../utils/gsap';

@Component({
  selector: 'portfolio-hero-section',
  standalone: true,
  imports: [],

  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  constructor(protected element: ElementRef) {
    this.element = element;
  }

  heroContent = viewChild('heroContent', { read: ElementRef });
  desc = viewChild('desc', { read: ElementRef });

  ngAfterViewInit() {
    const heroContent = this.heroContent()!;
    const desc = this.desc()!;

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContent.nativeElement,
        pin: this.element.nativeElement,
        scrub: 1,
        start: 'top top',
        end: '+=1000',
      },
    });

    scrollTl.to(
      heroContent.nativeElement,
      {
        opacity: 0,
      },
      0.4
    );

    const textTl = gsap.timeline({
      repeat: -1,
    });

    const titles = ['Problem Solver', 'Thinker', 'Engineer', 'Developer'];

    titles.forEach((title) => {
      textTl.to(desc.nativeElement, {
        duration: 1,
        delay: 2,
        text: {
          value: '',
          rtl: true,
        },
      });
      textTl.to(desc.nativeElement, {
        duration: 2,
        text: title,
      });
    });
  }
}
