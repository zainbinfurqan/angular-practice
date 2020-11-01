import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
import { Posts, Comments } from '../models/Posts'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPostUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.getPostUrl)
  }

  getPostComments(Comments: Comments): Observable<Comments[]> {
    const getPostCommentsUrl = `https://jsonplaceholder.typicode.com/posts/${Comments.id}/comments`
    return this.http.get<Comments[]>(getPostCommentsUrl)
  }

}
