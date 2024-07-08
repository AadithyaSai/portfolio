import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { gsap } from '../utils/gsap';

@Component({
  selector: 'portfolio-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.component.html',
})
export class AboutSectionComponent {
  constructor(protected element: ElementRef) {
    this.element = element;
  }

  skills = [
    {
      type: 'Languages',
      array: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      type: 'Libraries',
      array: ['PyQt6', 'OpenCV', 'React', 'Tailwind', 'Express'],
    },
    { type: 'Frameworks', array: ['Django', 'Flask', 'Angular'] },
    {
      type: 'Tools',
      array: [
        'Git/Github',
        'Linux/Shell',
        'Browser Devtools',
        'Postman',
        'VSCode',
      ],
    },
  ];

  headings = viewChildren('heading', { read: ElementRef });
  contents = viewChildren('content', { read: ElementRef });
  image = viewChild('image', { read: ElementRef });

  ngAfterViewInit() {
    const headings = this.headings().map((heading) => heading.nativeElement);
    const contents = this.contents().map((content) => content.nativeElement);
    const image = this.image()?.nativeElement;

    gsap.to(this.element.nativeElement, {
      opacity: 0,
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: 'bottom 50%',
        toggleActions: 'play none reverse none',
        // markers: true,
      },
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: 'top 60%',
        end: '+=1000',
        once: true,
        // markers: true,
      },
      defaults: {
        duration: 1,
      },
    });

    scrollTl.from(image, {
      y: 50,
      opacity: 0,
    });
    scrollTl.from(
      headings,
      {
        x: -50,
        opacity: 0,
        stagger: 0.3,
        ease: 'back.out(2.3)',
      },
      0.5
    );
    scrollTl.from(
      contents,
      {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      },
      '<0.4'
    );
  }
}
