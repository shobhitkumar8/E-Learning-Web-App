import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesModule } from '../../courses/courses.module';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css'],
  providers:[AuthService]
})
export class TeacherdashboardComponent implements OnInit {
 
  formValue !: FormGroup; 
  coursesModelObj :CoursesModule = new CoursesModule();
  coursesData !: any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formbuilder:FormBuilder,private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Course_Title : [''],
      Course_Discription : [''],
      Price : [''],            
    })
    this.getAllCourses();
  }
  clickAddCourses(){
    this.formValue.reset();
    this.showAdd= true;
    this.showUpdate= false;
  }
  postCourses(){
    this.coursesModelObj.Course_Title = this.formValue.value.Course_Title;
    this.coursesModelObj.Course_Discription = this.formValue.value.Course_Discription;
    this.coursesModelObj.Price = this.formValue.value.Price;
   
    this.auth.postCourses(this.coursesModelObj)
     .subscribe(res=>{
      console.log(res);
      alert("Course added successfully")
      this.formValue.reset();
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCourses();
     },
     err=>{
      alert("somthing went wrong")
    }) 
   }
   getAllCourses(){
   this.auth.getCourses()
   .subscribe(res=>{
    this.coursesData = res;
    })
   }
   deleteCourses(row:any){
    this.auth.deleteCourses(row.Course_ID)
    .subscribe(res=>{
      alert("Courses Deleted");
      this.getAllCourses();
    })
   }
   onEdit(row:any){
    this.showAdd= false;
    this.showUpdate= true;
    this.coursesModelObj.Course_ID = row.Course_ID;
    this.formValue.controls[`Course_Title`].setValue(row.Course_Title);
    this.formValue.controls[`Course_Discription`].setValue(row.Course_Discription);
    this.formValue.controls[`Price`].setValue(row.Price);
       
   }
  //  updateCourses(){
  //   this.coursesModelObj.Course_Title = this.formValue.value.Course_Title;
  //   this.coursesModelObj.Course_Discription = this.formValue.value.Course_Discription;
  //   this.coursesModelObj.Price = this.formValue.value.Price;
   
  //    this.auth.updateCourses(this.coursesModelObj,this.coursesModelObj.Course_ID)
  //    .subscribe(res=>{
  //     alert("Updated Successfully");
  //     let ref = document.getElementById('cancel')
  //     ref?.click();
  //     this.formValue.reset();
  //     this.getAllCourses();
  //    })
  //  }
   logout(){
    this.router.navigate(['teacherlogin'])
   }
  // back()
  // {
  // this.router.navigate(['/'])
  // }
}
