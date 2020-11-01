import { Component, OnInit } from '@angular/core';
import { Posts, Comments } from '../../models/Posts';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[];
  comments: Comments[];
  showComments: Boolean = false
  showCommentIndex: string = ''

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.PostService.getPosts().subscribe(res => {
      this.posts = res
    })
  }

  getComments(item, index) {
    console.log(item, index)
    this.PostService.getPostComments(item).subscribe(res => {
      this.showComments = true
      this.showCommentIndex = index
      console.log(res)
    })
  }

}
