import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card';
import { FeaturedQuoteComponent } from '../../shared/components/featured-quote/featured-quote';
import { PaginationComponent } from '../../shared/components/pagination/pagination';
import { Quote } from '../../core/services/quote.service';
import { BookService } from '../../core/services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FeaturedQuoteComponent, PaginationComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  currentPage = 1;
  readonly itemsPerPage = 6;

  constructor(private bookService: BookService) {}

  get books(): any[] {
    return this.bookService.getBooks();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.books.length / this.itemsPerPage));
  }

  get paginatedBooks() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    if (start >= this.books.length) {
      this.currentPage = this.totalPages;
      return this.books.slice((this.currentPage - 1) * this.itemsPerPage);
    }
    return this.books.slice(start, start + this.itemsPerPage);
  }

  handlePageChange(page: number) {
    this.currentPage = page;
  }

  sampleQuote: Quote = {
    id: '1',
    userId: 'user1',
    text: 'The library is the sanctuary of the mind, where the whispers of a thousand ages coalesce into a single, timeless truth.',
    author: 'Alaric Thorne',
  };
}
