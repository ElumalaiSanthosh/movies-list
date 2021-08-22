import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../common/model/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Output() movieSelected = new EventEmitter<string>();

  ngOnInit() {}
  selectMovie(movieId: string) {
    this.movieSelected.emit(movieId);
  }
}
