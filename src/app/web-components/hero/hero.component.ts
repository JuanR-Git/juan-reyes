import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedJsModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}
