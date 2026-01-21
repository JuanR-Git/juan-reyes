import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/experience.model';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  private dataService = inject(DataService);
  
  experiences: Experience[] = this.dataService.getExperiences();
  
  getTypeBadge(type: string): string {
    const typeMap: { [key: string]: string } = {
      'full-time': 'Full-Time',
      'part-time': 'Part-Time',
      'internship': 'Internship',
      'co-op': 'Co-op',
      'volunteer': 'Volunteer',
      'leadership': 'Leadership'
    };
    return typeMap[type] || type;
  }
}
