import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {
  
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";  
  teacherloginform!:FormGroup;
  teacherloginForm: any;
  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.teacherloginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  
    }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onLogin(){
    if(this.teacherloginForm.valid){
      console.log(this.teacherloginForm.value)     
      this.auth.teacherlogin(this.teacherloginForm.value)
      .subscribe({
        next:(res)=>{
          alert("Login sucessfully");
          this.teacherloginForm.reset();
          this.router.navigate(['teacherdashboard'])

        },
        error:(err)=>{
          alert("invalid inputs")
        }
      })
    }else{      
      this.validateAllFromFileds(this.teacherloginForm);
      alert("Your Form is invalid")
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

  

