import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  beforeEach(() => {
    service = new TodosService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should todos instance of Array', () => {
    expect(service.todos instanceof Array).toBe(true);
  });

  it('should have 1 item when add todo 1 item', () => {
    const item = { id: 1, title: 'title', detail: 'detail', category: 'category 1' };

    service.add(item);

    expect(service.todos.length).toBe(1);
    expect(service.todos).toEqual([{ id: 1, title: 'title', detail: 'detail', category: 'category 1' }]);
  });

  it('should delete selected item from todo list', () => {
    service.todos = [{ id: 1, title: 'title', detail: 'detail', category: 'category 1' }];
    const item = { id: 1, title: 'title', detail: 'detail', category: 'category 1' };

    service.delete(item);

    expect(service.todos).toEqual([]);
  });

  it('should update selected item from todo list', () => {
    service.todos = [{ id: 1, title: 'title', detail: 'detail', category: 'category 1' }];
    const item = { id: 1, title: 'title', detail: 'detail', category: 'category 2' };

    service.update(item);

    expect(service.todos).toEqual([{ id: 1, title: 'title', detail: 'detail', category: 'category 2' }]);
  });

  it('should find item by id from todo list', () => {
    service.todos = [{ id: 1, title: 'title', detail: 'detail', category: 'category 1' }];

    const item = service.find(1);

    expect(item).toEqual({ id: 1, title: 'title', detail: 'detail', category: 'category 1' });
  });
});
