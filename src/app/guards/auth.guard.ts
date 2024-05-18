import { Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RoutingPath } from '../enums/routing-path';

export const AuthGuard = (): true | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!!authService.authToken) {
    return true;
  }

  return router.createUrlTree([`/${RoutingPath.landing}`]);
}
