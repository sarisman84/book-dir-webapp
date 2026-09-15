import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styles: `
    .navbar {
      justify-content: space-between;
    }
    
    .navbar-body {
      gap: 1rem;
    }

    .navbar-context-body {
      gap: 1rem;
    }

    .u-align-h {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .u-clear-list {
      list-style: none;
    }
  `,
  template: `
    <div class="navbar u-align-h u-clear-list">
      <div class="u-align-h">
        <h1>Book Site</h1>
        <nav>
          <ul class="navbar-body u-align-h u-clear-list">
            <li><button routerLink="/home">Books</button></li>
            <li><button routerLink="/about">My Quotes</button></li>
          </ul>
        </nav>
      </div>

      <ul class="navbar-context-body u-align-h u-clear-list">
        <li><button routerLink="/register">EN/SV</button></li>
        <li><button routerLink="/register">Theme</button></li>
        <li><button routerLink="/login">Login</button></li>
      </ul>
    </div>
  `,
})
export class Navbar {}

// styleUrl: './navbar.scss',
// templateUrl: './navbar.html',
