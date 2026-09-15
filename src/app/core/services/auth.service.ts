import { Injectable } from '@angular/core';

export interface User {
  id: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'nordic_auth_token';
  private readonly USER_KEY = 'nordic_user';

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  getUser(): User | null {
    return JSON.parse(localStorage.getItem(this.USER_KEY) || 'null');
  }

  login(username: string, password: string): boolean {
    // Mock validation: any password 'password123' works
    if (password === 'password123') {
      const mockUser: User = { id: 'u1', username, email: `${username}@example.com` };
      localStorage.setItem(this.AUTH_TOKEN_KEY, 'mock-jwt-token-12345');
      localStorage.setItem(this.USER_KEY, JSON.stringify(mockUser));
      return true;
    }
    return false;
  }

  register(username: string, email: string, password: string): boolean {
    // Mock registration
    const mockUser: User = { id: 'u' + Date.now(), username, email };
    localStorage.setItem(this.USER_KEY, JSON.stringify(mockUser));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.AUTH_TOKEN_KEY);
  }
}
