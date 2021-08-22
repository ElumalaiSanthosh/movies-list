import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MovieListModule } from "../movie-list/movie-list.module";
import { MoviePageComponent } from "./movie-page.component";

@NgModule({
  declarations: [MoviePageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MovieListModule,
    MatSelectModule,
    FormsModule,
    MatGridListModule,
  ],
  exports: [MoviePageComponent],
})
export class MoviePageModule {}
