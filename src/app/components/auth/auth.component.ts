import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { handleError } from '../../utils/errorHandler';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title,
  ) {
    // Setting the title of the browser tab
    this.titleService.setTitle('Login');
  }

  /**
   * Initiates a login process for the user.
   * @see authService.fakeLogin
   */
  logIn() {
    this.authService
      .fakeLogin(this.username, this.password)
      .pipe(
        tap((isLogged: boolean) => {
          if (!isLogged) {
            alert('Login failed, invalid username or password.');
          }
          this.router.navigate(['/']).catch(handleError);
        }),
      )
      .subscribe();
  }
}
