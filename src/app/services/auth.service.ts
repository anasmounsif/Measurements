import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { StoreService } from './store.service';
import { handleError } from '../utils/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private store: StoreService,
  ) {}

  get isLoggedIn(): boolean {
    return this.store.getAuthTokenFromLocalStorage();
  }

  fakeLogin(username: string, password: string): Observable<boolean> {
    if (!username || !password) {
      return of(false);
    }

    const fakeToken: string = '123fakeToken321';
    const isLogged: boolean = username === 'user' && password === 'pass';

    if (isLogged) {
      this.store.setAuthTokenIntoLocalStorage(fakeToken);
      return of(true);
    }
    return of(false);
  }

  logout() {
    this.store.removeAuthTokenFromLocalStorage();
    this.router.navigate(['/auth']).catch(handleError);
  }
}
