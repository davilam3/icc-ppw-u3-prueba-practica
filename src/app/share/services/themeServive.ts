import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_KEY = 'app-theme';

//  Guarda el tema actual en localStorage

  saveTheme(theme: string): void {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch {
      console.warn('No se pudo guardar el tema en localStorage');
    }
  }

  // Obtiene el tema guardado o devuelve uno por defecto
  getSavedTheme(defaultTheme: string = 'light'): string {
    try {
      return localStorage.getItem(this.THEME_KEY) ?? defaultTheme;
    } catch {
      return defaultTheme;
    }
  }

  // Aplica el tema al elemento html

  applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
