import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

interface Tarjeta {
  nombre: string;
  marcada: boolean;
}

@Component({
  selector: 'app-bingo-musical',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './bingo-musical.component.html',
  styleUrls: ['./bingo-musical.component.css']
})
export class BingoMusicalComponent implements OnInit {
  nombre = new FormControl('');
  tarjetas: Tarjeta[] = [];
  todasLasCanciones: string[] = [
    'Bohemian Rhapsody', 'Hotel California', 'Imagine', 'Billie Jean', 'Sweet Child O’ Mine',
    'Shape of You', 'Uptown Funk', 'Rolling in the Deep', 'Like a Prayer', 'Stairway to Heaven',
    'Smells Like Teen Spirit', 'Thriller', 'Hey Jude', 'Wonderwall', 'All Star'
  ];
  bingo: boolean = false;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {}

  ingresar(): void {
    if (this.nombre.value) {
      this.generarCarton();
    } else {
      this.snackBar.open('Por favor, ingresa tu nombre', 'Cerrar', { duration: 2000 });
    }
  }

  generarCarton(): void {
    this.tarjetas = this.todasLasCanciones
      .sort(() => 0.5 - Math.random())
      .slice(0, 8)
      .map(nombre => ({ nombre, marcada: false }));
    this.bingo = false;
  }

  marcarTarjeta(tarjeta: Tarjeta): void {
    if (!tarjeta.marcada) {
      tarjeta.marcada = true;
      this.verificarBingo();
    }
  }

  verificarBingo(): void {
    if (this.tarjetas.every(t => t.marcada)) {
      this.bingo = true;
    }
  }

}

