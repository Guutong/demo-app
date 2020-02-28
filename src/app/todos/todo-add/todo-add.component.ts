import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required]),
  });

  constructor(
    public todosService: TodosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add() {
    if (this.todoForm.valid) {
      const newId = this.generateId();
      this.todoForm.controls.id.setValue(newId);
      this.todosService.add(this.todoForm.getRawValue());
    }
    this.router.navigate(['/todos']);
  }

  private generateId() {
    const maxOldId = Math.max(...(this.todosService.todos.length > 0 ? this.todosService.todos.map(e => e.id) : [0]));
    const newId = (maxOldId ? maxOldId : 0) + 1;
    return newId;
  }
}
