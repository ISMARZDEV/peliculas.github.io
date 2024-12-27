import { CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {


  peliculasEncines!: any [];

  peliculasProximosEstrenos!: any[];

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEncines = [
        {
          titulo: 'Spiderman',
          fechaLanzamiento: new Date(),
          precio: 1499,
          poster: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 150.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg'
        }
      ]
    }, 2000);

    setTimeout(() => {
      this.peliculasProximosEstrenos = [
        {
          titulo: 'Spiderman',
          fechaLanzamiento: new Date(),
          precio: 1499,
          poster: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 150.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg'
        }
      ]
    }, 2000);

  }

  clickBoton(){
    alert('Me has clickeado');
  }

  peliculas: any[] = [];
}
