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
    this.titleService.setTitle('Login');
  }

  logIn() {
    this.authService
      .fakeLogin(this.username, this.password)
      .pipe(
        tap(() => {
          this.router.navigate(['/']).catch(handleError);
        }),
      )
      .subscribe();
  }
}
