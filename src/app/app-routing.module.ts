import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { CompletedTaskComponent } from './Components/completed-task/completed-task.component';
import { DeleteTaskComponent } from './Components/delete-task/delete-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { ProcessTaskComponent } from './Components/process-task/process-task.component';
import { TasksComponent } from './Components/tasks/tasks.component';

const routes: Routes = [
  { path: 'new', component: AddTaskComponent },
  { path: 'completed', component: CompletedTaskComponent },
  { path: 'InProcess', component: ProcessTaskComponent },
  { path: 'edit/:id', component: EditTaskComponent },
  { path: 'delete/:id', component: DeleteTaskComponent },
  { path: '', component: TasksComponent },
  { path: '**', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
