import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { ToDoService } from '../../services/to-do.service'

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private ToDoService: ToDoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      itemMain: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onCheck(item) {
    console.log(item)
    item.completed = !item.completed
    this.ToDoService.isCompleted(item).subscribe(res => {
      console.log(res)
    })
  }

  onDelete(item) {
    console.log(item)

  }

}
