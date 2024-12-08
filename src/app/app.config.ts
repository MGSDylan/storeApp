import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding(),withPreloading(PreloadAllModules)), provideClientHydration(),
    provideHttpClient()]
};//withComponentInputBinding() llega los parametros como input a las paginas
//,withPreloading(PreloadAllModules) precarga los demas archivos js que aun no se an visitado
