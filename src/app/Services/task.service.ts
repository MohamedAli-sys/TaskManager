import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  api: string = `${environment.API_URL}`;
  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}tasks`)
  }

  getSingleTask(id): Observable<Task> {
    return this.http.get<Task>(`${this.api}tasks/${id}`)
  }

  postNewTask(body: Task) {
    this.http.post(`${this.api}tasks`, body, { headers: { "Content-Type": "application/json; charset=utf-8" } })
      .subscribe(m => { }, error => console.log(error))
  }

  editTask(id, body: Task) {
    return this.http.put(`${this.api}tasks/${id}`, body, { headers: { "Content-Type": "application/json; charset=utf-8" } })
      .subscribe(m => { }, error => console.log(error)
      )
  }

  deleteTask(id) {
    this.http.delete(`${this.api}tasks/${id}`, { headers: { "Content-Type": "application/json; charset=utf-8" } })
      .subscribe(m => { }, error => console.log(error))
  }

}
