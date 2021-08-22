import {
  Component,
  Input,
  OnInit
} from "@angular/core";
import { Movie } from "../common/model/movie.model";

@Component({
  selector: "app-detail-card",
  templateUrl: "./detail-card.component.html",
  styleUrls: ["./detail-card.component.scss"],
})
export class DetailCardComponent implements OnInit {
  @Input() movie: Movie;
  slides:any=[]

  ngOnInit() {
    console.log(this.movie);
    this.slides=this.movie.Stills
  }
}
