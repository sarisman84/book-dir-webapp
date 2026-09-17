import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export interface Book {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  coverImageUrl: string;
  status: 'Available' | 'Reserved' | 'Archived';
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
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      this.seedBooks();
    } else {
      const books = JSON.parse(stored);
      if (books.length === 0 || !books[0].coverImageUrl) {
        this.seedBooks();
      }
    }
  }

  private seedBooks() {
    const seedData: Book[] = [
      { id: '1', title: 'The Nordic Codex', author: 'Soren Kierkegaard', publicationDate: '1843-01-01', coverImageUrl: 'https://picsum.photos/seed/book1/200/300', status: 'Available' },
      { id: '2', title: 'Winter Solstice Echoes', author: 'Astrid Lindgren', publicationDate: '1945-06-15', coverImageUrl: 'https://picsum.photos/seed/book2/200/300', status: 'Reserved' },
      { id: '3', title: 'The Slate Archive', author: 'Hamsun Knut', publicationDate: '1890-11-20', coverImageUrl: 'https://picsum.photos/seed/book3/200/300', status: 'Reserved' },
      { id: '4', title: 'Fjords of Memory', author: 'Sigrid Undset', publicationDate: '1920-03-10', coverImageUrl: 'https://picsum.photos/seed/book4/200/300', status: 'Available' },
      { id: '5', title: 'Northern Lights', author: 'Vilhelm Moberg', publicationDate: '1934-05-22', coverImageUrl: 'https://picsum.photos/seed/book5/200/300', status: 'Available' },
      { id: '6', title: 'The Frozen Library', author: 'Tove Jansson', publicationDate: '1951-08-14', coverImageUrl: 'https://picsum.photos/seed/book6/200/300', status: 'Reserved' },
      { id: '7', title: 'Midnight Sun Chronicles', author: 'Per Olov Enquist', publicationDate: '1967-09-03', coverImageUrl: 'https://picsum.photos/seed/book7/200/300', status: 'Available' },
      { id: '8', title: 'Runestone Tales', author: 'Selma Lagerlof', publicationDate: '1904-12-07', coverImageUrl: 'https://picsum.photos/seed/book8/200/300', status: 'Archived' },
      { id: '9', title: 'The Icebound Quill', author: 'Lars Gustafsson', publicationDate: '1978-04-19', coverImageUrl: 'https://picsum.photos/seed/book9/200/300', status: 'Available' },
      { id: '10', title: 'Birch and Bone', author: 'Karin Boye', publicationDate: '1941-11-30', coverImageUrl: 'https://picsum.photos/seed/book10/200/300', status: 'Reserved' },
      { id: '11', title: 'Aurora Rising', author: 'Harry Martinson', publicationDate: '1956-06-08', coverImageUrl: 'https://picsum.photos/seed/book11/200/300', status: 'Available' },
      { id: '12', title: 'The Viking Codex', author: 'Snorri Sturluson', publicationDate: '1230-01-01', coverImageUrl: 'https://picsum.photos/seed/book12/200/300', status: 'Archived' },
      { id: '13', title: 'Cold Harbor', author: 'Monica Ali', publicationDate: '2003-09-15', coverImageUrl: 'https://picsum.photos/seed/book13/200/300', status: 'Available' },
      { id: '14', title: 'Echoes of Tundra', author: 'Vilhelm von Braun', publicationDate: '1989-02-28', coverImageUrl: 'https://picsum.photos/seed/book14/200/300', status: 'Reserved' },
      { id: '15', title: 'The Amber Archive', author: 'Henning Mankell', publicationDate: '1992-10-05', coverImageUrl: 'https://picsum.photos/seed/book15/200/300', status: 'Available' },
    ];
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(seedData));
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
