import { Component, ElementRef, viewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  swaying: number;
  color: string;
  opacity: number;
}

@Component({
  selector: 'portfolio-bg-canvas',
  standalone: true,
  imports: [],
  templateUrl: './bg-canvas.component.html',
})
export class BgCanvasComponent {
  constructor(protected element: ElementRef) {
    this.element = element;
  }

  canvas = viewChild('canvas', { read: ElementRef });

  ngAfterViewInit() {
    const canvas = this.canvas()!.nativeElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // particle effect
    const particles: Particle[] = [];

    function addParticle() {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        swaying: Math.random() * Math.PI * 2,
        size: Math.random() + 1,
        speed: Math.random() / 4,
        color: 'ffffff',
        opacity: Math.floor(Math.random() * 50) + 50,
      });
    }

    function drawParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.save();
        ctx.translate(p.x + p.size / 2, p.y + p.size / 2);

        ctx.fillStyle = '#' + p.color + Math.round(p.opacity).toString(16);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speed;
        p.x += p.speed * Math.sin(p.swaying) + 0.3;
        p.swaying += 0.01;

        if (p.y > canvas.height + 20) {
          p.y = -20;
        }
        if (p.y < -20) {
          p.y = canvas.height + 20;
        }
        if (p.x < -20) {
          p.x = canvas.width + 20;
        }
        if (p.x > canvas.width + 20) {
          p.x = -20;
        }

        if (p.opacity < 100) {
          p.opacity += 0.1;
        } else {
          p.opacity = 50;
        }
      }
    }

    for (let i = 0; i < 100; i++) {
      addParticle();
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawParticles();
      updateParticles();
      requestAnimationFrame(loop);
    }

    loop();
  }
}
