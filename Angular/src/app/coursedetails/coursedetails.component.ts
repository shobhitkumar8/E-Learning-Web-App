import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

      constructor() { }
  
    ngOnInit(): void {
    }
    searchText: string='';
    onSearchTextEntered(searchValue: string){
      this.searchText= searchValue;
     
      
    }
   
  }