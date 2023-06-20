import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { StudentloginComponent} from './components/studentlogin/studentlogin.component';
import { StudentsignupComponent } from './components/studentsignup/studentsignup.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { LectureComponent } from './lecture/lecture.component';
import { CsharpComponent } from './csharp/csharp.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment1Component } from './payment1/payment1.component';
import { Payment2Component } from './payment2/payment2.component';
import { TrainingComponent } from './training/training.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { Lecture1Component } from './lecture1/lecture1.component';
import { Lecture2Component } from './lecture2/lecture2.component';
import { Lecture3Component } from './lecture3/lecture3.component';
import { Lecture4Component } from './lecture4/lecture4.component';
import { Lecture5Component } from './lecture5/lecture5.component';
import { Training1Component } from './training1/training1.component';
import { Training2Component } from './training2/training2.component';
import { Training3Component } from './training3/training3.component';
import { Training4Component } from './training4/training4.component';
import { Training5Component } from './training5/training5.component';



const routes: Routes = [
{path:'',redirectTo:'/',pathMatch:'full'},
// {path:'**',component:PageNotFoundComponent},
{path:'studentlogin',component:StudentloginComponent},
{path:'studentsignup',component:StudentsignupComponent},
{path:'teacherlogin',component:TeacherloginComponent},
{path:'teacherdashboard',component:TeacherdashboardComponent},
{path:'attendance',component:AttendanceComponent},
{path:'studentdashboard',component:StudentdashboardComponent},
{path:'', redirectTo:'welcome',pathMatch:"full"},
{path:"welcome", component:WelcomeComponent},
{path:"question", component:QuestionComponent},
{path:"lecture", component:LectureComponent},
{path:"csharp", component:CsharpComponent},
{path:"payment", component:PaymentComponent},
{path:"training", component:TrainingComponent},
{path:"lecture1", component:Lecture1Component},
  {path:"lecture2", component:Lecture2Component},
  {path:"lecture3", component:Lecture3Component},
  {path:"lecture4", component:Lecture4Component},
  {path:"lecture5", component:Lecture5Component},
  {path:"training1", component:Training1Component},
  {path:"training2", component:Training2Component},
  {path:"training3", component:Training3Component},
  {path:"training4", component:Training4Component},
  {path:"training5", component:Training5Component},
  {path:"coursedetails",component:CoursedetailsComponent},
  {path:"payment1", component:Payment1Component},
  {path:"payment2", component:Payment2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
