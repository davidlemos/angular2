import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {SettingsEnum} from '../../enum/settingsEnum';
import {UtilService} from '../../services/utilService';
import {AlbumService} from '../../services/albumService';
import { Album } from '../../model/album';


@Component({
    templateUrl: 'build/pages/albums/albums.html'
})
export class AlbumsPage {
    private apiAlbumUrl:string;
    private albumList:Array<Album>;
    private mostrarDetalhes:boolean;
    private selectedAlbum:Album ;

    constructor(private nav: NavController,
    private albumService: AlbumService,
    private http:Http) {
        this.apiAlbumUrl = UtilService.getEnumString(SettingsEnum, SettingsEnum.API_ALBUM_URL);
        this.listarAlbuns();
        this.mostrarDetalhes = false;
        this.selectedAlbum = new Album("", null, null);

    }
    listarAlbuns(){
         let creds = "";
         this.albumList = [];
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let options = new RequestOptions({ headers: headers });
            this.http.get(this.apiAlbumUrl).subscribe(
                        data => this.preencherAlbumList(data),
                        err => console.log()
            );
    }
    viewAlbum(selectedAlbum: Album){
        this.selectedAlbum = selectedAlbum;
        this.mostrarDetalhes = true;
    }

    private preencherAlbumList(data: any){
        this.albumList =  this.albumService.preencherAlbumList(data);
    }

    getMostrarDetalhes() : boolean{
        return this.mostrarDetalhes;
    }
    setMostrarDetalhes(mostrarDetalhes: boolean){
        this.mostrarDetalhes = mostrarDetalhes;
    }
    getAlbumList() : Array<Album>{
        return this.albumList;
    }
    setAlbumList(albumList: Array<Album>){
        this.albumList = albumList;
    }
     getSelectedAlbum() : Album{
        return this.selectedAlbum;
    }
    setSelectedAlbum(selectedAlbum: Album){
        this.selectedAlbum = selectedAlbum;
    }

  }

