import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
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
  lines = viewChildren('line', { read: ElementRef });

  ngAfterViewInit() {
    const heroContent = this.heroContent()!;
    const desc = this.desc()!;
    const lines = this.lines();

    const loadTl = gsap.timeline({
      delay: 2,
      defaults: {
        duration: 0.5,
      },
    });

    lines.forEach((line) => {
      loadTl.from(
        line.nativeElement,
        {
          x: -25,
          opacity: 0,
        },
        '-=0.2'
      );
    });
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContent.nativeElement,
          pin: this.element.nativeElement,
          scrub: 1,
          start: 'top top',
          end: '+=1000',
          onLeave: () => textTl.pause(),
          onEnterBack: () => textTl.play(),
        },
      });

      scrollTl.to(
        heroContent.nativeElement,
        {
          opacity: 0,
        },
        0.4
      );
    });

    mm.add('(max-width: 768px)', () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContent.nativeElement,
          pin: this.element.nativeElement,
          scrub: 1,
          start: 'top top',
          end: '+=50',
          onLeave: () => textTl.pause(),
          onEnterBack: () => textTl.play(),
        },
      });

      scrollTl.to(
        heroContent.nativeElement,
        {
          opacity: 0,
        },
        0.4
      );
    });

    const textTl = gsap.timeline({
      delay: 3,
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
