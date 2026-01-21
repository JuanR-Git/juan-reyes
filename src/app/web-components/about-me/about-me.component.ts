import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Skill, SkillCategory } from '../../models/skill.model';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {
  private dataService = inject(DataService);

  skillCategories: SkillCategory[] = this.dataService.getSkills();

  // Get all skills that have images for the visual display
  get allSkills(): Skill[] {
    return this.skillCategories
      .flatMap(category => category.skills)
      .filter(skill => skill.image);
  }
}
