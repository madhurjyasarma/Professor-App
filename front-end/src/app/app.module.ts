import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorAddComponent } from './professors/professor-add/professor-add.component';
import { ProfessorListComponent } from './professors/professor-list/professor-list.component';
import { ProfessorsComponent } from './professors/professors.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorAddComponent,
    ProfessorListComponent,
    ProfessorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
