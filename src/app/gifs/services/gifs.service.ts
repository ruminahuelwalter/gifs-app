import { afterNextRender, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../Interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
    constructor( private http: HttpClient ) {
        afterNextRender(() => {
            this.loadLocalStorage();
            console.log('Gifs Service Ready');            
          });
    }

    private _tagsHistory: string[] = [];
    private apiKey: string = 'zOkEnADY5KW8UTn63MaJr1M6HE3CvOyS';
    private serviceUrl = 'https://api.giphy.com/v1/gifs';

    public gifList: Gif[] = [];

    get tagsHistory() {
        return [ ...this._tagsHistory]
    }
    private organizeHistory( tag: string ){
        tag = tag.toLowerCase();
        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
        };

        this._tagsHistory.unshift( tag );
        this._tagsHistory = this.tagsHistory.splice(0,10);
        this.saveLocalStorage();
    }


    searchTag( tag: string ): void{
        if (tag.length === 0 ) return
        this.organizeHistory( tag );

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag)

        this.http.get<SearchResponse>(`${ this.serviceUrl }/search?`,{ params })
        .subscribe( resp => {
            this.gifList = resp.data;
            // console.log({ gifs: this.gifList })
        });
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify( this._tagsHistory ))
    }

    private loadLocalStorage(): void {
        if (!localStorage.getItem('history'))
            return
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
        if( this._tagsHistory.length === 0 ) return;
        this.searchTag(this._tagsHistory[0]);
    }

}