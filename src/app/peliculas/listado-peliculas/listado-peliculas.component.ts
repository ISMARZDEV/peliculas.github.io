import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
default: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
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

  @Input({required: true})


  peliculas!: any[]

  agregarPelicula(){
    this.peliculas.push({
      titulo: 'Inception',
      fechaLanzamiento: new Date('2012-07-03'),
      precio: 500,
    })
  }
  
  removerPelicula(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);

    this.peliculas.splice(indice, 1);
  }

  // duplicarNumero(valor: number): number {
  //   return valor * 2
  // }
}
