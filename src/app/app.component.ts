import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BgCanvasComponent } from './bg-canvas/bg-canvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BgCanvasComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
