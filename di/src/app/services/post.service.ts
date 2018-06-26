import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

const END_POINT = 'http://jsonplaceholder.typicode.com'

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) {}

  getPost(){
    return this.httpClient.get(END_POINT + '/posts')
  }

  getName(){
    return "PostService"
  }
}
