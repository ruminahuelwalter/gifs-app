import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../Interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = []

}
