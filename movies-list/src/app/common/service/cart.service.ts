import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  movies: Movie[] = [];

  constructor() {}

  addToCart(movie: Movie) {
    this.movies.push(movie);
  }

  getItems() {
    return this.movies;
  }

  clearCart() {
    this.movies = [];
    return this.movies;
  }
}
