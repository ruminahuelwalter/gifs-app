import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../Interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [
    CardListComponent,
    SearchBoxComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor( private gifsService: GifsService){}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
