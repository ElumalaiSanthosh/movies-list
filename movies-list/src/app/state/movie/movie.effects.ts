import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from 'src/app/common/service/movie.service';
import * as MovieActions from './movie.actions';

@Injectable({
  providedIn: 'root',
})
export class MovieEffect {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  getAllMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any }>(MovieActions.MovieActionTypes.GetAllMovies),
      switchMap(() =>
        this.movieService.getAllMovies().pipe(
          map((res) => ({
            type: MovieActions.MovieActionTypes.GetAllMoviesSuccess,
            payload: res,
          })),
          catchError((err) =>
            of({
              type: MovieActions.MovieActionTypes.GetAllMoviesFailure,
              payload: err,
            })
          )
        )
      )
    )
  );

  getMovieById$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: any; payload: string }>(
        MovieActions.MovieActionTypes.GetMovieById
      ),
      switchMap((action) =>
        this.movieService.getMovieById(action.payload).pipe(
          map((res) => ({
            type: MovieActions.MovieActionTypes.GetMovieByIdSuccess,
            payload: res,
          })),
          catchError((err) =>
            of({
              type: MovieActions.MovieActionTypes.GetMovieByIdFailure,
              payload: err,
            })
          )
        )
      )
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; query: string }>(
        MovieActions.MovieActionTypes.SearchMovies
      ),
      switchMap((action) =>
        this.movieService.searchMovies(action.query).pipe(
          map((res) => ({
            type: MovieActions.MovieActionTypes.SearchMoviesSuccess,
            payload: res,
          })),
          catchError((err) =>
            of({
              type: MovieActions.MovieActionTypes.SearchMoviesFailure,
              payload: err,
            })
          )
        )
      )
    )
  );

  sortMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; query: string }>(
        MovieActions.MovieActionTypes.SortMovies
      ),
      switchMap((action) =>
        this.movieService.sortMovies(action.query).pipe(
          map((res) => ({
            type: MovieActions.MovieActionTypes.SortMoviesSuccess,
            payload: res,
          })),
          catchError((err) =>
            of({
              type: MovieActions.MovieActionTypes.SortMoviesFailure,
              payload: err,
            })
          )
        )
      )
    )
  );
}
