import { Injectable } from '@angular/core';

export interface Quote {
  id: string;
  userId: string;
  text: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private readonly STORAGE_KEY = 'nordic_library_quotes';

  // Simulates a network delay for "Simulated Failures" requirement
  private async simulateNetwork(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  async getQuotesForUser(userId: string): Promise<Quote[]> {
    await this.simulateNetwork();
    const allQuotes = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return allQuotes.filter((q: Quote) => q.userId === userId);
  }

  async addQuote(userId: string, quoteData: Omit<Quote, 'id' | 'userId'>): Promise<Quote> {
    await this.simulateNetwork();
    
    if (quoteData.text.length > 1000) {
      throw new Error('Quote text exceeds maximum length of 1000 characters.');
    }

    const quotes = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const newQuote = { ...quoteData, id: Date.now().toString(), userId };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify([...quotes, newQuote]));
    return newQuote;
  }

  async deleteQuote(quoteId: string): Promise<void> {
    await this.simulateNetwork();
    const quotes = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const updatedQuotes = quotes.filter((q: Quote) => q.id !== quoteId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedQuotes));
  }
}
