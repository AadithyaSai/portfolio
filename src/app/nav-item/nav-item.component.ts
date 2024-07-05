import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  @Input({ required: true }) link = '';
}
