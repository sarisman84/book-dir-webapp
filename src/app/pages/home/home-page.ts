import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card';
import { FeaturedQuoteComponent } from '../../shared/components/featured-quote/featured-quote';
import { PaginationComponent } from '../../shared/components/pagination/pagination';
import { Quote } from '../../core/services/quote.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FeaturedQuoteComponent, PaginationComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  handlePageChange(page: number) {
    console.log('Page changed to:', page);
  }

  sampleQuote: Quote = {
    id: '1',
    userId: 'user1',
    text: 'The library is the sanctuary of the mind, where the whispers of a thousand ages coalesce into a single, timeless truth.',
    author: 'Alaric Thorne',
  };
}
