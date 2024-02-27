import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly KEY: string = 'fakeAuthToken';

  constructor() {}

  setAuthTokenIntoLocalStorage(authToken: string) {
    if (!authToken) {
      return;
    }
    localStorage.setItem(this.KEY, JSON.stringify(authToken));
  }

  getAuthTokenFromLocalStorage(): boolean {
    const authToken: string | null = localStorage.getItem(this.KEY);
    return authToken ? JSON.parse(authToken) : false;
  }

  removeAuthTokenFromLocalStorage() {
    localStorage.removeItem(this.KEY);
  }
}
