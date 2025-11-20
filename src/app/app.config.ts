import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// 🔹 Importa tus rutas (las definiremos en app.routes.ts)
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // 🔹 Activamos angular routing moderno
    provideRouter(routes),

    // 🔹 Hidratación (ya lo tenías, se mantiene tal cual)
    provideClientHydration(withEventReplay())
  ]
};
