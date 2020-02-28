import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'Meeting',
      detail: 'Conferences call at 11:00 AM',
      category: 'meeting',
      status: false,
    }
  ];
  constructor() { }

  add(item) {
    this.todos.push(item);
  }

  find(id) {
    return this.todos.find(item => item.id === id);
  }

  delete(item) {
    this.todos = this.todos.filter((e: any) => e.id !== item.id);
  }

  update(item) {
    this.todos = this.todos.map((e: any) => {
      if (e.id === item.id) {
        e = item;
      }
      return e;
    });
  }
}
