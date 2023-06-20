import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture2',
  templateUrl: './lecture2.component.html',
  styleUrls: ['./lecture2.component.css']
})
export class Lecture2Component implements OnInit {

  nameKey: any;

  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
