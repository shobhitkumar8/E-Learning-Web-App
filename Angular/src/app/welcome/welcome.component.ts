import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    startQuiz(){
      localStorage.setItem("name",this.nameKey.nativeElement.value);
    }
    startQuiz1(){
      localStorage.setItem("name",this.nameKey.nativeElement.value);
    }
    back()
    {
   this.router.navigate(['studentdashboard'])
    }
}


