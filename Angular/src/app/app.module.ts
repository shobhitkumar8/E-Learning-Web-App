import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesModule } from './courses/courses.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { StudentsignupComponent } from './components/studentsignup/studentsignup.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LectureComponent } from './lecture/lecture.component';
import { Header2Component } from './header2/header2.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ChangeBgDirectiveService } from './change-bg.directive.service';
import { NgToastModule } from 'ng-angular-popup';
import { CsharpComponent } from './csharp/csharp.component';
import { PaymentComponent } from './payment/payment.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DataSource } from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TrainingComponent } from './training/training.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { Payment1Component } from './payment1/payment1.component';
import { Payment2Component } from './payment2/payment2.component';
//import { AddcourseComponent } from './addcourse/addcourse.component';

//import { AddCoursesComponent } from './components/addcourses/addcourses.component';
// import { CoursesFeaturedComponent } from './courses/courses-featured/courses-featured.component';
// import { CourseListComponent } from './courses/course-list/course-list.component';
// import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
// import { CourseRecentComponent } from './courses/course-recent/course-recent.component';
// import { CourseCategoriesComponent } from './courses/course-categories/course-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,    
    StudentloginComponent,
    StudentsignupComponent,
    TeacherloginComponent,
    TeacherdashboardComponent,
    StudentdashboardComponent,
    AttendanceComponent,
    QuestionComponent,
    WelcomeComponent,
    LectureComponent,
    Header2Component,
    ChangeBgDirectiveService,
    CsharpComponent,
    PaymentComponent,
    TrainingComponent,
    Lecture1Component,
    Lecture2Component,
    Lecture3Component,
    Lecture4Component,
    Lecture5Component,
    Training1Component,
    Training2Component,
    Training3Component,
    Training4Component,
    Training5Component,
    CoursedetailsComponent,
    Payment1Component,
    Payment2Component,
       
    // CoursesFeaturedComponent,
    // CourseListComponent,
    // CourseDetailComponent,
    // CourseRecentComponent,
    // CourseCategoriesComponent
  ],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],    

  imports: [
    
    HttpClientModule,
    StaticpagesModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,  
    ReactiveFormsModule,
    YouTubePlayerModule,  
    NgToastModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CoursesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
