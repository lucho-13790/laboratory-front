import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './components/home/home.component'
import {ExamComponent } from './components/exam/exam.component'
import {ConsultComponent } from './components/consult/consult.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component :HomeComponent},
  {path:'exam', component :ExamComponent},
  {path:'consult', component :ConsultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
