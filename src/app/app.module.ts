import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { HeaderComponent } from './Components/header/header.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { DeleteTaskComponent } from './Components/delete-task/delete-task.component';
import { CompletedTaskComponent } from './Components/completed-task/completed-task.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProcessTaskComponent } from './Components/process-task/process-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    CompletedTaskComponent,
    ProcessTaskComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
