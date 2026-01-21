import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  emailCopied = signal(false);

  contactMethods = [
    {
      type: 'email',
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'reyesj20703@gmail.com',
      href: 'mailto:reyesj20703@gmail.com',
      copyable: true
    },
    {
      type: 'linkedin',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'juan-reyes1',
      href: 'https://www.linkedin.com/in/juan-reyes1/',
      external: true
    },
    {
      type: 'github',
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'JuanR-Git',
      href: 'https://github.com/JuanR-Git',
      external: true
    }
  ];

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText('reyesj20703@gmail.com');
      this.emailCopied.set(true);
      setTimeout(() => this.emailCopied.set(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }
}
