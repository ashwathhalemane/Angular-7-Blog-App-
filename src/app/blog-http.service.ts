import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http'

//import { Observable } from 'rxjs/Observable';
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'

@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public Token='your-token-goes-here'
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  
  constructor(private _http:HttpClient) { 
    console.log("blog-http service called")
   }



   private handleError(error: HttpErrorResponse){
     console.log("Handle error called");
     console.log(error.message);
     return Observable.throw(error.message)  
   }

   public createBlog(blogData):any{
    let myResponse=this._http.post(this.baseUrl+'/create' + '?authToken='+this.Token, blogData)
    return myResponse;
  }
  public deleteBlog(blogId):any{
    let myResponse = this._http.post(this.baseUrl+'/'+'blogId'+'/delete'+ '?authToken='+this.Token, blogId);
    return myResponse;
  }
  public editBlog(blogData,blogId):any{
    let myResponse=this._http.put(this.baseUrl+'/'+'/blogId'+'/edit'+ '?authToken='+this.Token, blogData,blogId);
    return myResponse;
  }
   public getAllBlogs(): any{
    let myResponse = this._http.get(this.baseUrl+'/all'+'?authToken='+this.Token)
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInfo(currentBlogId): any{
    let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken=Y2Q0ZGI5MGZlYmE5MjE0Mjc4ODRiYmRkNTliOGFlZmZkZTc2NDQ0ZjhiYWYwMGU1NWFjNjc3NThkZWNiMmM1YmU1YzVmMWVkM2Y2NDE5OGFmNjljMGRhNGM4MzZlZThjYzJkOTE4NjgyZDRkYWM2OTI4ODFjYmVlM2VlZDRiNzhjYg==')
    console.log(myResponse);
    return myResponse;
  }
  
}
