import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './web-components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from './style-components/particles/particles.component';
import { AboutMeComponent } from "./web-components/about-me/about-me.component";
import { ExperienceComponent } from "./web-components/experience/experience.component";
import { ProjectsComponent } from "./web-components/projects/projects.component";
import { ContactComponent } from "./web-components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ParticlesComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Juan Reyes Portfolio';
}
