import { TodoEditComponent } from './todo-edit.component';
import { TodosService } from 'src/app/services/todos.service';
import { FormGroup } from '@angular/forms';

describe('TodoEditComponent', () => {
  let component: TodoEditComponent;

  beforeEach(() => {
    const service = new TodosService();
    const mockRoute = {} as any;
    const mockRouter = { navigate: () => Promise.resolve(true) } as any;
    component = new TodoEditComponent(mockRoute, service, mockRouter);
  });

  it('should create todo form instance of FormGroup', () => {
    expect(component.todoForm instanceof FormGroup).toBe(true);
  });

  it('should create fields todo form', () => {
    expect(component.todoForm.controls.id.value).toEqual(0);
    expect(component.todoForm.controls.title.value).toEqual('');
    expect(component.todoForm.controls.detail.value).toEqual('');
    expect(component.todoForm.controls.category.value).toEqual('');
    expect(component.todoForm.controls.status.value).toEqual(false);
    expect(component.todoForm.get('id').value).toEqual(0);
    expect(component.todoForm.get('title').value).toEqual('');
    expect(component.todoForm.get('detail').value).toEqual('');
    expect(component.todoForm.get('category').value).toEqual('');
    expect(component.todoForm.get('status').value).toEqual(false);
  });

  it('should invalid fields when input empty title, detail, category fields', () => {
    component.todoForm.controls.id.setValue(0);
    component.todoForm.controls.title.setValue('');
    component.todoForm.controls.detail.setValue('');
    component.todoForm.controls.category.setValue('');
    component.todoForm.controls.status.setValue(false);
    expect(component.todoForm.invalid).toBe(true);
  });

  it('should valid fields when input title, detail, category fields', () => {
    component.todoForm.controls.id.setValue(1);
    component.todoForm.controls.title.setValue('title');
    component.todoForm.controls.detail.setValue('detail');
    component.todoForm.controls.category.setValue('category1');
    component.todoForm.controls.status.setValue(false);
    expect(component.todoForm.valid).toBe(true);
  });


  it('should load default by id', () => {
    component.todosService.todos = [{
      id: 1,
      title: 'title',
      detail: 'detail',
      category: 'category1',
      status: false
    }];

    component.load(1);

    expect(component.todoForm.controls.id.value).toEqual(1);
    expect(component.todoForm.controls.title.value).toEqual('title');
    expect(component.todoForm.controls.detail.value).toEqual('detail');
    expect(component.todoForm.controls.category.value).toEqual('category1');
    expect(component.todoForm.controls.status.value).toEqual(false);
  });

  it('should edit todo item to service', () => {
    component.todosService.todos = [{
      id: 1,
      title: 'title',
      detail: 'detail',
      category: 'category1',
      status: false
    }];

    component.todoForm.controls.id.setValue(1);
    component.todoForm.controls.title.setValue('title');
    component.todoForm.controls.detail.setValue('detail');
    component.todoForm.controls.category.setValue('category1');
    component.todoForm.controls.status.setValue(true);

    component.edit();

    expect(component.todosService.todos).toEqual([{
      id: 1,
      title: 'title',
      detail: 'detail',
      category: 'category1',
      status: true
    }]);
  });

});
