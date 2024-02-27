import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  _: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): boolean | UrlTree => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const isLoggedIn: boolean = authService.isLoggedIn;
  const isAuthPage: boolean = state.url === '/auth';

  if (isLoggedIn && isAuthPage) {
    // Redirecting to /vehicles to prevent re-logging for already logged user
    return router.parseUrl('/');
  } else if (!isLoggedIn && !isAuthPage) {
    // Redirecting to /auth to for not logged user
    return router.parseUrl('/auth');
  }

  // Allowing navigation
  return true;
};
