import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  template: `
    <h5>Buscar</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)=" searchTag() "
    #txtTagInput
    >
  `,
  //templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor( private gifsService: GifsService){}
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  
  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag( newTag );
    this.tagInput.nativeElement.value = '';
  }
}
