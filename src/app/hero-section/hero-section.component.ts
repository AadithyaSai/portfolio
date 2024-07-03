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

  ngAfterViewInit() {
    const heroContent = this.heroContent()!;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContent.nativeElement,
        pin: this.element.nativeElement,
        scrub: 1,
        start: 'top top',
        end: '+=1000',
      },
    });

    tl.to(
      heroContent.nativeElement,
      {
        opacity: 0,
      },
      0.8
    );
  }
}
