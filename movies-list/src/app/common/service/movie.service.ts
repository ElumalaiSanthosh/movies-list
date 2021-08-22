import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public mockApi = 'http://localhost:3000';
  // http://localhost:3000/movies

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.mockApi}/movies`);
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http
      .get(`${this.mockApi}/movies`)
      .pipe(map((data) => this.filterById(movieId, data as Movie[])));
  }

  searchMovies(query: string): Observable<Movie[]> {
    return this.http
      .get(`${this.mockApi}/movies`)
      .pipe(map((data) => this.filterMovies(query, data as Movie[])));
  }

  filterMovies(query: string, movieList: Movie[]): Movie[] {
    return movieList.filter((movie) =>
      movie.Title.toLowerCase().includes(query)
    );
  }

  sortMovies(query: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.mockApi}/movies?sort=${query}`);
  }

  filterById(id: string, movieList: Movie[]): Movie {
    const filtered = movieList.filter((movie) => movie.imdbID === id);
    const movie: Movie = filtered[0] as Movie;
    return movie;
  }
}
