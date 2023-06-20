import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AddStudent } from './add-student';
import { AddTeacher } from './add-teacher';

@Injectable({
  providedIn: 'root'
})
export class OESservicesService {

  constructor() { }
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:44310/api/Students';
  constructor(private myClient: HttpClient) { }
  formData:AddStudent = new AddStudent();
  postStudent(){    
    return this.myClient.post(this.url+"/AddStudent",this.formData)
  }
 
  // putStudent(){
  //   return this.myClient.put(this.url+'/'+this.formData.StudentID,this.formData)
  // }
}
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url = 'http://localhost:44310/api/Teachers';
  constructor(private http: HttpClient) { }
  formData:AddTeacher = new AddTeacher();
 
  postTeacher(){
    return this.http.post(this.url+"/AddTeacher",this.formData)
  }
  // putTeacher(){
  //   return this.http.put(this.url+'/'+this.formData.TeacherID,this.formData)
  // }
  private baseUrl:string ="https://localhost:44310/api/";

 

 
  studentsignup(studentsObj:any){
    return this.http.post<any>(`${this.baseUrl}Students/Signup`,studentsObj)
  }
  studentlogin(studentObj:any){
    return this.http.post<any>(`${this.baseUrl}Students/login`,studentObj)
  }

  postCourses(data:any){

     return this.http.post<any>("https://localhost:44310/api/Courses/AddCourses",data)
  
     .pipe(map((res:any)=>{
  
      return res;
  
     }))
  
    }
  
   getCourses(){
  
    return this.http.get<any>("https://localhost:44310/api/Courses/GetCourses")
  
    .pipe(map((res:any)=>{
    return res;
  
   }))
  
   }
  
}


