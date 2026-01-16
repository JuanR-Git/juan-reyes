import { Component, OnInit, OnDestroy, HostListener, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = signal(false);
  activeSection = signal('hero');
  scrollProgress = signal(0);
  isScrolled = signal(false);

  // Removed 'education' from sections
  sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

  ngOnInit(): void {
    this.updateActiveSection();
    this.updateScrollProgress();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
    this.updateScrollProgress();
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 991 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 150;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection.set(this.sections[i]);
        break;
      }
    }
  }

  private updateScrollProgress(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.scrollProgress.set(Math.min(100, Math.max(0, progress)));
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  isActive(section: string): boolean {
    return this.activeSection() === section;
  }

  downloadResume(): void {
    window.open('/assets/resume.pdf', '_blank');
  }
}
