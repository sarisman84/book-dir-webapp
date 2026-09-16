import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly currentTheme = signal<Theme>('dark');

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this.currentTheme.update((theme) => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      this.applyTheme(newTheme);
      this.saveTheme(newTheme);
      return newTheme;
    });
  }

  private applyTheme(theme: Theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  private saveTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
      this.applyTheme(savedTheme);
    } else {
      // Respect system preference if no saved theme
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const theme = prefersLight ? 'light' : 'dark';
      this.currentTheme.set(theme);
      this.applyTheme(theme);
    }
  }
}
