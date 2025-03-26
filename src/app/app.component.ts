import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BingoMusicalComponent } from './bingo-musical/bingo-musical.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BingoMusicalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bingo-musical';
}
