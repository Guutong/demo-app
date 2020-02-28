import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodosRoutingModule } from './todos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  declarations: [TodoAddComponent, TodosComponent, TodoEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
