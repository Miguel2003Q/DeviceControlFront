import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()), // 🔥 Agregado para manejar inputs de rutas
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()), // Para interceptores personalizados si es necesario
    importProvidersFrom(ReactiveFormsModule), // Habilita formularios reactivos
  ],
};
