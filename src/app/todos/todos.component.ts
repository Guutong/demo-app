import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = [];
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todos = this.todosService.todos;
  }

  delete(item) {
    this.todosService.delete(item);
    this.todos = this.todosService.todos;
  }
}
