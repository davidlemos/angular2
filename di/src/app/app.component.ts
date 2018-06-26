import { Component } from '@angular/core';
import { PostService} from './services/post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  posts:any;

  constructor(private postService:PostService){
     this.title = this.postService.getName() 
  }

  getPosts(){
    let postsData:any;
    this.postService.getPost().subscribe(
      (data:postInterface) => {
         this.posts = data 
      }
    )
  }
}

interface postInterface{
   id:string,
   userId:string,
   title:string,
   body:string   
}
