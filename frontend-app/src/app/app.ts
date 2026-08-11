import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend-app');

    isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;

    document.documentElement.classList.toggle(
      'dark',
      this.isDark
    );
  }
}
