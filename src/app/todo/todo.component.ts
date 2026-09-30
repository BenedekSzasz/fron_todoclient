import { Component, inject } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  api = inject(ApiService);

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.api.getTodos().subscribe({
      next: (data) => {
        console.log('Adat: ', data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
