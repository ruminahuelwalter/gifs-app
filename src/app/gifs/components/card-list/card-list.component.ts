import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../Interfaces/gifs.interface';
import { GifsCardComponent } from "../card/card.component";

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CommonModule, GifsCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = []
}
