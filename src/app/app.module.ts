import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PlannerComponent } from './planner/planner.component';
import { SlotComponent } from './planner/slot/slot.component';
import { CourseCreditsPipe } from './pipes/course-credits.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    CoursesComponent,
    CourseCardComponent,
    PlannerComponent,
    SlotComponent,
    CourseCreditsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
