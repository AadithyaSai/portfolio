import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';
import { gsap, ScrollTrigger } from '../utils/gsap';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(protected element: ElementRef) {
    this.element = element;
  }

  items = viewChildren('item', { read: ElementRef });
  dropdown = viewChild('dropdown', { read: ElementRef });
  dropdownItems = viewChildren('dropdownitem', { read: ElementRef });

  dropdownTl!: gsap.core.Timeline;

  ngAfterViewInit() {
    const items = this.items().map((item) => item.nativeElement);
    const dropdown = this.dropdown()!.nativeElement;
    const dropdownItems = this.dropdownItems().map(
      (item) => item.nativeElement
    );

    this.dropdownTl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        display: 'none',
      },
    });
    this.dropdownTl.addLabel('start');
    this.dropdownTl.to(
      dropdown,
      {
        opacity: 1,
        y: 25,
        display: 'block',
      },
      'start'
    );

    this.dropdownTl.to(
      dropdownItems,
      {
        opacity: 1,
        stagger: 0.2,
        display: 'block',
      },
      'start'
    );

    const loadTl = gsap.timeline({
      delay: 0.5,
      defaults: {
        duration: 1,
      },
    });

    loadTl.from(items.reverse(), {
      y: 25,
      opacity: 0,
      stagger: 0.2,
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: 'top -1000',
        toggleActions: 'play none reverse reverse',
      },
    });

    scrollTl.to(this.element.nativeElement, {
      opacity: 0,
      y: -100,
    });
  }

  toggleDropdown() {
    const dropdown = this.dropdown()!.nativeElement;

    const isVisible = dropdown.checkVisibility();

    console.log(isVisible);

    if (isVisible) {
      this.dropdownTl.reverse();
    } else {
      this.dropdownTl.play('start');
    }
  }
}
