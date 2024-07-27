import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interface';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class GifsCardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gifs property is required');
  }
}
