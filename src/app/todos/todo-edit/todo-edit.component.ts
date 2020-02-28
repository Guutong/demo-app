import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required]),
  });

  constructor(private route: ActivatedRoute, public todosService: TodosService, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.load(id);
  }

  load(id) {
    if (id) {
      this.todoForm.patchValue(this.todosService.find(id));
    }
  }

  edit() {
    if (this.todoForm.valid) {
      this.todosService.update(this.todoForm.getRawValue());
    }
    this.router.navigate(['/todos']);
  }

}
