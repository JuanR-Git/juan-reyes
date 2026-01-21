import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MoveDirection, OutMode, Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticlesComponent {
  id = "tsparticles";

  // Minimalist blue particles
  particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },

    background: {
      color: {
        value: "#030713",
      },
    },

    fpsLimit: 60,

    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: {
          enable: true,
        },
      },

      modes: {
        push: {
          quantity: 2,
        },
        grab: {
          distance: 170,
          links: {
            opacity: 0.5,
            color: "#71a3f3"
          }
        },
      },
    },

    particles: {
      color: {
        value: "#1552b5",
      },
      links: {
        color: "#1552b5",
        distance: 200,
        enable: true,
        opacity: 0.12,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: true,
        speed: { min: 0.2, max: 0.5 },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 325,
      },
      opacity: {
        value: { min: 0.3, max: 0.6 },
        animation: {
          enable: true,
          speed: 0.3,
          sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.0 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    // Particles loaded
  }
}
