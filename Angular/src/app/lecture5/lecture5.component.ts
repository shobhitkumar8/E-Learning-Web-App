import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture5',
  templateUrl: './lecture5.component.html',
  styleUrls: ['./lecture5.component.css']
})
export class Lecture5Component implements OnInit {

  nameKey: any;

  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
