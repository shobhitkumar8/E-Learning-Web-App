import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import {NgToastService} from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css'],
  providers:[AuthService]
})
// export class Student{
//   Student_ID:number;
//   Student_Name:string='';
//   Email_ID:string='';
//   Password:string='';
// }

export class StudentloginComponent implements OnInit {
  type: string = "Password";
  
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  public studentloginform!:FormGroup;
  studentloginForm: any;
  
  
  
  constructor(private fb:FormBuilder,private http:HttpClient, private auth: AuthService, private router: Router,private toast:NgToastService) { }
  ngOnInit(): void {
    this.studentloginform = this.fb.group({
      UserName: ['',Validators.required],
      Password: ['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  login() {

    console.log(this.studentloginform)



    this.http.post('https://localhost:44310/api/Students/login', this.studentloginform.value, { responseType: 'text' }).subscribe(users => {

      console.log(users)

      if (users == "Login Successfull")

       {

        this.toast.success({detail:"Success",summary:"Logged in Successfully",duration:5000})

        this.router.navigate(['studentdashboard']);        

      }              

     },

     error=>{

      if(error){

        console.log(error);

        this.toast.error({detail:"Wrong Inputs",summary:"Enter Valid Inputs",duration:5000})

      }

    }    

    );  

  }
  private validateAllFromFileds(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(filed=>{
      const control = formGroup.get(filed);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFromFileds(control)
      }
    })
  }
}
