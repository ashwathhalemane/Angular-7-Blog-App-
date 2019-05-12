import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [{
    "blogId": "2",
    "title": "Lol2",
    "created": "Time2",
    "author": "Ashwath2",
    "description":"Des2"
  },
  {
    "blogId": "1",
    "title": "Lol1",
    "created": "Time1",
    "author": "Ashwath1",
    "description":"Des1"
  },
  {
    "blogId": "3",
    "title": "Lol3",
    "created": "Time3",
    "author": "Ashwath3",
    "description":"Des3"
  }];

  public currentBlog;

  public getAllBlogs():any{
    return this.allBlogs;
  }

  public getSingleBlogInfo(currentBlogId): any{

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
   
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
  constructor() { 
    console.log("Service is called!");
  }
}
