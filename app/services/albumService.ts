import {Injectable} from '@angular/core';
import { Album } from '../model/album';

@Injectable()
export class AlbumService {

    preencherAlbumList(data:any):Array<Album> {
       let jsonBody = data._body;
       let jsonList = JSON.parse(jsonBody);
       let album:Album;
       let albumList = new Array<Album>();
       for (let json of jsonList) {
         album = new Album(json.title,json.id,json.userId);
         albumList.push(album);
       }
       return albumList
    }


      
  }