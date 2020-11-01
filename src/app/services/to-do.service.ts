import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  toDoUrl: string = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }


  getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.toDoUrl)
  }

  isCompleted(todo: Todo): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

}
