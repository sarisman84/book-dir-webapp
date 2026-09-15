import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { CardComponent } from './shared/components/card/card';
import { FeaturedQuoteComponent } from './shared/components/featured-quote/featured-quote';
import { PaginationComponent } from './shared/components/pagination/pagination';

@Component({
  imports: [RouterOutlet, Navbar, CardComponent, FeaturedQuoteComponent, PaginationComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('website');

  handlePageChange(page: number) {
    console.log('Page changed to:', page);
  }
}
