import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  subscriptions: Subscription[] = []
  tasks: Task[] = []
  SearchByWord
  constructor(private task: TaskService) { }

  ngOnInit(): void {
    let sub = this.task.getAllTasks().subscribe(el => {
      el.map(ta => {
        if (ta.completed == true) {
          this.tasks.push(ta)
        }
      })
    })
    this.subscriptions.push(sub)
  }

}
