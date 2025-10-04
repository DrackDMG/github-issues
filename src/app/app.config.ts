import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { withDevtools } from '@tanstack/angular-query-experimental/devtools'


import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideTanStackQuery(new QueryClient(), withDevtools())
  ]
};
