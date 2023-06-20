import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture1',
  templateUrl: './lecture1.component.html',
  styleUrls: ['./lecture1.component.css']
})
export class Lecture1Component implements OnInit {

  nameKey: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  btnClick(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
