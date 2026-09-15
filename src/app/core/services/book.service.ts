import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export interface Book {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly STORAGE_KEY = 'nordic_library_books';

  constructor(private authService: AuthService) {
    this.initStorage();
  }

  private initStorage() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      const seedData: Book[] = [
        { id: '1', title: 'The Nordic Codex', author: 'Soren Kierkegaard', publicationDate: '1843-01-01' },
        { id: '2', title: 'Winter Solstice Echoes', author: 'Astrid Lindgren', publicationDate: '1945-06-15' },
        { id: '3', title: 'The Slate Archive', author: 'Hamsun Knut', publicationDate: '1890-11-20' },
      ];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(seedData));
    }
  }

  getBooks(): Book[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  getBookById(id: string): Book | undefined {
    return this.getBooks().find(b => b.id === id);
  }

  addBook(book: Omit<Book, 'id'>): Book {
    if (!this.authService.isLoggedIn()) {
      throw new Error('Unauthorized: Only authenticated users can modify the Global Directory.');
    }
    const books = this.getBooks();
    const newBook = { ...book, id: Date.now().toString() };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify([...books, newBook]));
    return newBook;
  }

  updateBook(id: string, updates: Partial<Book>): Book | undefined {
    if (!this.authService.isLoggedIn()) {
      throw new Error('Unauthorized: Only authenticated users can modify the Global Directory.');
    }
    const books = this.getBooks();
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return undefined;
    
    books[index] = { ...books[index], ...updates };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(books));
    return books[index];
  }

  deleteBook(id: string): void {
    if (!this.authService.isLoggedIn()) {
      throw new Error('Unauthorized: Only authenticated users can modify the Global Directory.');
    }
    const books = this.getBooks().filter(b => b.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(books));
  }
}
