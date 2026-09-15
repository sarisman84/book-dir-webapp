import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',

})
export class Navbar {
  protected readonly isMenuOpen = signal(false);
  protected readonly currentLang = signal('EN');

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}

// styleUrl: './navbar.scss',
// templateUrl: './navbar.html',
