import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailCardModule } from '../detail-card/detail-card.module';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, DetailCardModule],
  exports: [MovieDetailComponent],
})
export class MovieDetailModule {}
