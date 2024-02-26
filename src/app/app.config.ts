import { ApplicationConfig } from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withEnabledBlockingInitialNavigation()), provideHttpClient()]
};
