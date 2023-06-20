import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  nameKey: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
back()
  {
   this.router.navigate(['studentdashboard'])
  }
  btnClick(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
