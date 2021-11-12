import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskForm: FormGroup
  taskRef: Task
  constructor(private fb: FormBuilder, private taskServ: TaskService, private route: ActivatedRoute, private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: false,
      inProcess: false,
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskServ.getSingleTask(id).subscribe(t => {
      this.taskRef = t
      this.taskForm = this.fb.group({
        title: [t.title, Validators.required],
        description: [t.description, Validators.required],
        completed: [t.completed],
        inProcess: [t.inProcess],
        startTime: [t.startTime, Validators.required],
        endTime: [t.endTime, Validators.required],
      })
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.taskServ.editTask(id, this.taskForm.value)
    this.router.navigate(['/'])
  }

}
