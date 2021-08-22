import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DetailCardComponent } from './detail-card.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';



@NgModule({
  declarations: [DetailCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCarouselModule.forRoot()
  ],
  exports: [DetailCardComponent]
})
export class DetailCardModule { }
