import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  host = 'https://jsonplaceholder.typicode.com';

  getTodos() {
    let url = this.host + '/todos';
    return this.http.get(url);
  }
}
