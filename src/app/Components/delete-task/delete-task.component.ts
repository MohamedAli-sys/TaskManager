import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {
  task
  constructor(private taskServ: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.taskServ.getSingleTask(id).subscribe(t => {
      this.task = t
    })
  }

  delete(id) {
    this.taskServ.deleteTask(id)
    this.router.navigate(['/'])
  }

  negative() {
    this.router.navigate(['/'])
  }

}
