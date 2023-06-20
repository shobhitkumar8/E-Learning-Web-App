import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesModule } from '../courses/courses.module';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
//import { AddCoursesComponent } from '../components/addcourses/addcourses.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string ="https://localhost:44310/api/";   
  constructor(private http : HttpClient) { } 
   // [x: string]: any;
    postCourses(data:any) {
      return this.http.post<any>(`${this.baseUrl}Courses/AddCourses/`,data);
      // .pipe(map((res:any)=>{
      //   return res;
      // }));
           
    }
    getCourses() {
      return this.http.get<any>(`${this.baseUrl}Courses/GetAllCourses/`);
      // .pipe(map((res:any)=>{
      //   return res;
      // }))
      
    }
    deleteCourses(Course_ID: number) {
      return this.http.delete<any>(`${this.baseUrl}Courses/`+Course_ID);
      // .pipe(map((res:any)=>{
      //   return res;
      // }))
    }
    // updateCourses(data:any, Course_ID: number) {
    //   return this.http.put<any>(`${this.baseUrl}auth/login`+Course_ID,data)
    //   .pipe(map((res:any)=>{
    //     return res;
    //    }))
    // }  
   
      payment(payObj:any)
      {
        return this.http.post<any>(`${this.baseUrl}Payment/Post_Payment`,payObj)
      }
    teacherlogin(teacherObj:any){
      return this.http.post<any>(`${this.baseUrl}auth/login`,teacherObj)
    }
    studentlogin(studentObj:any){
      return this.http.post<any>(`${this.baseUrl}Students/login`,studentObj)
    }
    studentsignup(studentsObj:any){
      return this.http.post<any>(`${this.baseUrl}Students/Signup`,studentsObj)
    } 
    getattendance(attendanceObj:any): Observable<any>{
      return this.http.get<any>(`${this.baseUrl}Students/GetAll`,attendanceObj)
    }
     
}




