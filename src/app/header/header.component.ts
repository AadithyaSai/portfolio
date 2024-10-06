import {
  Component,
  ElementRef,
  viewChild,
  viewChildren,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from '../utils/gsap';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    protected element: ElementRef,
    @Inject(DOCUMENT) document: Document
  ) {
    this.element = element;
    this.document = document;
  }

  private document: Document;

  items = viewChildren('item', { read: ElementRef });
  dropdown = viewChild('dropdown', { read: ElementRef });
  dropdownItems = viewChildren('dropdownitem', { read: ElementRef });
  hamburgerOpen = viewChild('hamburgeropen', { read: ElementRef });
  hamburgerClose = viewChild('hamburgerclose', { read: ElementRef });

  dropdownTl!: gsap.core.Timeline;

  ngAfterViewInit() {
    const items = this.items().map((item) => item.nativeElement);
    const dropdown = this.dropdown()!.nativeElement;
    const dropdownItems = this.dropdownItems().map(
      (item) => item.nativeElement
    );
    const hamburgerOpen = this.hamburgerOpen()!.nativeElement;
    const hamburgerClose = this.hamburgerClose()!.nativeElement;

    this.dropdownTl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
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
        stagger: 0.1,
        display: 'block',
      },
      'start'
    );

    this.dropdownTl.to(
      hamburgerOpen,
      {
        opacity: 0,
        rotate: 90,
      },
      'start'
    );

    this.dropdownTl.to(
      hamburgerClose,
      {
        opacity: 1,
        rotate: 90,
      },
      'start'
    );

    const loadTl = gsap.timeline({
      delay: 0.5,
      defaults: {
        duration: 1,
      },
    });

    loadTl.from(items, {
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

    if (isVisible) {
      // Close the dropdown
      this.document.body.style.overflow = 'auto';
      this.dropdownTl.reverse();
    } else {
      // Open the dropdown
      this.dropdownTl.play('start');
      this.document.body.style.overflow = 'hidden';
    }
  }
}
