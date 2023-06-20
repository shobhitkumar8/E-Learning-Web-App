import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  [x: string]: any;
  public cartItemList : any =[]
  registrationForm:any;
  constructor(private http:HttpClient, private auth:AuthService, private fb:FormBuilder,private router:Router) {
    this.createRegistrationForm();
    
   }
 
  public courses : any = [];
  public grandTotal !: number;
  public totalprice:any;

  createRegistrationForm(): void{
    this.registrationForm = this.fb.group({
      card_Name: ['',Validators.required],
      card_Number: ['',[Validators.required,Validators.pattern("^[1-9][0-9]{15}$")]],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      ex_Month:['',[Validators.required,Validators.pattern("^(0[0-9])|(1[0-2]){1}$")]],
      ex_Year:['',[Validators.required,Validators.pattern("^[1-9][0-9]{3}$")]],
      cvv:['',[Validators.required,Validators.pattern("^[1-9][0-9]{2}$")]],
      amount:['',Validators.required]     
    });
}
  ngOnInit(): void {  
   
  }  
  
handleClear():void{
  this.registrationForm.reset();
}
payment(){
    this.http.post('https://localhost:44310/api/Payment/Post_Payment',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
     console.log(data);
    if(data == "Payment Succesfull")
    {   
          alert("payment Successful");
          this.router.navigate(['/training']);    
    }   
  },  
  error=>{
    if(error){
      console.log(error);
      alert("Payment Failed");
    }
  }
  );
  }   
 }
 // if(this.registrationForm.valid){
  //   console.log(this.registrationForm.value)  
  //   this.auth.payment(this.registrationForm.value)
  //   .subscribe({
  //     next:(res)=>{
  //       alert("payment Sucessfully");
  //       //this.registrationForm.reset();
        
       
  //     },
  //     error:(err)=>{
  //       alert("payment Sucessfully");
  //       this.router.navigate(['training'])
  //     }
  //   })  
  // }  

   //success=>{
      //  if(success){
       //   console.log(success);
          // }
      //};
