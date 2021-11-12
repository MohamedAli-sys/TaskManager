import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskForm: FormGroup
  constructor(private fb: FormBuilder, private taskServ: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: false,
      inProcess: false,
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      id: Date.now()
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.taskServ.postNewTask(this.taskForm.value)
    this.taskForm.reset();
  }
}
