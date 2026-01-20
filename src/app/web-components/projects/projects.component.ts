import { Component, inject, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private dataService = inject(DataService);

  allProjects: Project[] = this.dataService.getProjects();
  selectedCategory = signal<string>('all');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(project => project.category === category);
  });

  categories = [
    { value: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
    { value: 'web', label: 'Web Dev', icon: 'fas fa-globe' },
    { value: 'embedded', label: 'Embedded', icon: 'fas fa-microchip' },
    { value: 'robotics', label: 'Robotics', icon: 'fas fa-robot' },
    { value: 'software', label: 'Software', icon: 'fas fa-code' },
  ];

  filterProjects(category: string): void {
    this.selectedCategory.set(category);
  }
}
