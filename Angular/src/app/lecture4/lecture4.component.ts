import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture4',
  templateUrl: './lecture4.component.html',
  styleUrls: ['./lecture4.component.css']
})
export class Lecture4Component implements OnInit {

  nameKey: any;

  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
