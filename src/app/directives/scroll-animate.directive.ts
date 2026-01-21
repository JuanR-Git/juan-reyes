import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'fade-in-section';
  @Input() animationDelay = 0;
  @Input() threshold = 0.1;

  private observer: IntersectionObserver | null = null;
  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.elementRef.nativeElement;
    element.classList.add(this.animationClass);

    if (this.animationDelay > 0) {
      element.classList.add(`fade-delay-${this.animationDelay}`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve after animation
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
