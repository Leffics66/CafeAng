import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Main } from './main/main';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, Main],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('CafeAng');
}
