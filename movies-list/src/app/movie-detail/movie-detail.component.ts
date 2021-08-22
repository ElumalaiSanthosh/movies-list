import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Movie } from '../common/model/movie.model';
import { fader } from '../route-animations';
import { getGetMovieById } from '../state/actions';
import { movieSelected } from '../state/movie/movie.reducer';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  animations: [fader],
})
export class MovieDetailComponent implements OnInit {
  public selectedMovie: Movie;
  public movie$: Observable<Movie>;
  public subscriptions: Subscription[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {}

  ngOnInit() {
    debugger;
    const id = String(this.activatedRoute.snapshot.params.id);
    this.movie$ = this.store.pipe(select(movieSelected));
    this.store.dispatch(getGetMovieById({ payload: id }));
  }
}
