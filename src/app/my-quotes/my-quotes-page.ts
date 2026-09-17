import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Quote } from '../core/services/quote.service';

interface QuoteWithBook extends Quote {
  bookTitle: string;
}

const PLACEHOLDER_QUOTES: QuoteWithBook[] = [
  {
    id: 'p1',
    userId: 'u1',
    text: 'The library is the sanctuary of the mind, where the whispers of a thousand ages coalesce into a single, timeless truth.',
    author: 'Alaric Thorne',
    bookTitle: 'The Nordic Codex',
  },
  {
    id: 'p2',
    userId: 'u1',
    text: 'In the silence between pages, we find the voices of those who came before us, echoing through the corridors of time.',
    author: 'Soren Kierkegaard',
    bookTitle: 'The Slate Archive',
  },
  {
    id: 'p3',
    userId: 'u1',
    text: 'A book held close is a companion that never deserts you, no matter how dark the night becomes.',
    author: 'Astrid Lindgren',
    bookTitle: 'Winter Solstice Echoes',
  },
  {
    id: 'p4',
    userId: 'u1',
    text: 'The words we choose to remember are the architects of who we will become.',
    author: 'Hamsun Knut',
    bookTitle: 'The Nordic Codex',
  },
];

@Component({
  selector: 'app-my-quotes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-quotes-page.html',
  styleUrl: './my-quotes-page.scss',
})
export class MyQuotesPage implements OnInit {
  protected quotes: QuoteWithBook[] = [];
  protected groupedQuotes: Map<string, QuoteWithBook[]> = new Map();
  protected searchQuery = '';
  protected quoteCount = 0;
  protected showEmptyState = false;
  protected isLoading = false;

  ngOnInit(): void {
    this.loadQuotes();
  }

  protected loadQuotes(): void {
    this.quotes = [...PLACEHOLDER_QUOTES];
    this.groupQuotes();
    this.quoteCount = this.quotes.length;
    this.showEmptyState = this.quotes.length === 0;
    this.isLoading = false;
  }

  protected groupQuotes(): void {
    this.groupedQuotes = new Map();
    const sorted = [...this.quotes].sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
    for (const quote of sorted) {
      const book = quote.bookTitle;
      if (!this.groupedQuotes.has(book)) {
        this.groupedQuotes.set(book, []);
      }
      this.groupedQuotes.get(book)!.push(quote);
    }
  }

  protected onSearch(query: string): void {
    this.searchQuery = query;
    const filtered = this.quotes.filter(
      (q) =>
        q.text.toLowerCase().includes(query.toLowerCase()) ||
        q.author.toLowerCase().includes(query.toLowerCase()) ||
        q.bookTitle.toLowerCase().includes(query.toLowerCase())
    );
    const sorted = [...filtered].sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
    this.groupedQuotes = new Map();
    for (const quote of sorted) {
      const book = quote.bookTitle;
      if (!this.groupedQuotes.has(book)) {
        this.groupedQuotes.set(book, []);
      }
      this.groupedQuotes.get(book)!.push(quote);
    }
    this.showEmptyState = filtered.length === 0 && query.length > 0;
  }

  protected clearSearch(): void {
    this.searchQuery = '';
    this.groupQuotes();
    this.showEmptyState = false;
  }

  protected getBookHeaders(): string[] {
    return Array.from(this.groupedQuotes.keys());
  }

  protected getQuotesForBook(book: string): QuoteWithBook[] {
    return this.groupedQuotes.get(book) || [];
  }
}
