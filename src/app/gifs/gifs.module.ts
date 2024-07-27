import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CardListComponent,
    CommonModule,
    HomePageComponent,
    SearchBoxComponent,
    SharedModule
    
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent
  ]
})
export class GifsModule { }
