import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../common/model/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movies: Movie[];
  @Output() selectedMovieFromList = new EventEmitter<number>();

  constructor() {}

  onSelect(movieId: number) {
    this.selectedMovieFromList.emit(movieId);
  }
}
