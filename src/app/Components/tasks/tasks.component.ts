import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = []
  tasks: Task[] = []
  SearchByWord
  constructor(private task: TaskService) {
  }

  ngOnInit(): void {
    let sub = this.task.getAllTasks().subscribe(el => {
      this.tasks = el
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    for (let i of this.subscriptions) {
      i.unsubscribe();
    }
  }
}
