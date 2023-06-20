import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture3',
  templateUrl: './lecture3.component.html',
  styleUrls: ['./lecture3.component.css']
})
export class Lecture3Component implements OnInit {

  nameKey: any;

  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
