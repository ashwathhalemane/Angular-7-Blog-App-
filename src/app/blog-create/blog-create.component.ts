import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {BlogHttpService} from '../blog-http.service'
import {ActivatedRoute, Router} from '@angular/router'
//import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService,private _route: ActivatedRoute, private router: Router)
   {
    //this.toastr.setRootViewContainerRef(vcr);
  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy","Drama","Action"];

  ngOnInit() {
  }

  public createBlog():any{

    let blogData={
    title:this.blogTitle,
    blogBody:this.blogBodyHtml,
    description:this.blogDescription,
    category:this.blogCategory

    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data=>{
        console.log(data);
        console.log("Blog created.");
        alert("Blog Posted success!:)")
        //this.toastr.success('You are awesome!', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId])
        }, 1000)
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage); 
        alert('Error occured!:(')
        //this.toastr.error('This is not good!', 'Oops!');
      }
    );
    
    
  }

}
