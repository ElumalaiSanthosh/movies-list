import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../common/model/movie.model';
import { fader } from '../route-animations';
import {
  getAllMovies,
  searchMovies,
  sortMovies
} from '../state/movie/movie.actions';
import { allMovies } from '../state/movie/movie.reducer';

interface Field {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  animations: [fader],
})
export class MoviePageComponent implements OnInit {
  fields: Field[] = [
    { value: 'Title', viewValue: 'Title' },
    { value: 'Language', viewValue: 'Language' },
    { value: 'Location', viewValue: 'Location' },
  ];
  selectedValue: string;

  public movies$: Observable<Movie[]>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.movies$ = this.store.pipe(select(allMovies));
    this.store.dispatch(getAllMovies());
  }

  searchMovies(event) {
    const input = event.target.value;

    if (input.length >= 3 || input === '') {
      this.store.dispatch(searchMovies({ query: input }));
    }
  }

  sortMovies(event) {
    const input = event.value;
    this.store.dispatch(sortMovies({ query: input }));
  }

  movieDetail(movieId: number) {
    this.router.navigate(['movies', movieId]);
  }
}
