import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router' 
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
public currentBlog;

  constructor(private _route:ActivatedRoute, private router:Router,public blogHttpService:BlogHttpService) { 
    console.log("Constructor is called");
  }

  ngOnInit() {
    console.log("ngOninit called");
    let myBlogId=this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId);
    this.currentBlog=this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(
      data=>{
        console.log(data);
        this.currentBlog=data['data']
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage); 
      }
    );
    console.log(this.currentBlog);
  }

}
