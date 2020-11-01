import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { ToDoService } from '../../services/to-do.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];


  constructor(private ToDoService: ToDoService) { }

  ngOnInit(): void {
    this.ToDoService.getToDos().subscribe(todos => {
      this.todos = todos
    })
  }

}
