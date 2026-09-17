import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',

})
export class Navbar {
  private readonly themeService = inject(ThemeService);
  protected readonly isMenuOpen = signal(false);
  protected readonly currentLang = signal('EN');

  get theme() {
    return this.themeService.currentTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}

// styleUrl: './navbar.scss',
// templateUrl: './navbar.html',
