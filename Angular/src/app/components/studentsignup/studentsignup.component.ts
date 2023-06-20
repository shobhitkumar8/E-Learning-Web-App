import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {  
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  studentsignUpFrom!: FormGroup;
  // signUpFrom!: FormGroup;
  
  constructor(private fb:FormBuilder,private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.studentsignUpFrom = this.fb.group({      
      Student_Name: ['',Validators.required],      
      UserName: ['',Validators.required],
      Email_ID: ['',Validators.compose([Validators.required,Validators.email])],
      Password: ['',Validators.required]     
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSingup(){
    if(this.studentsignUpFrom.valid){
      console.log(this.studentsignUpFrom.value)  
      this.auth.studentsignup(this.studentsignUpFrom.value)
      .subscribe({
        next:(res)=>{
          alert("Succssfully Registered")
          this.studentsignUpFrom.reset();
          this.router.navigate(['studentlogin']);
        },
        error:(err)=>{
          alert("Something went wrong")
        }
      })  
    }else{      
      this.validateAllFromFileds(this.studentsignUpFrom);
      alert("Please Enter Valid Inputs")
    }    
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
