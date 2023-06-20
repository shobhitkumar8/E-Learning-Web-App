import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [AuthService]
})
export class AttendanceComponent implements OnInit {

  allpost: any;
  constructor(private attendanceservice: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.attendanceservice.getattendance(Attendance).subscribe((data) => {this.allpost = data})
    this.getAllRecords();
  }
  
  getAllRecords() {
    this.attendanceservice.getattendance(Attendance).subscribe((data:Attendance[])=>{
      this.allpost=data;
      console.log(this.allpost);
  });
  }
logout(){
  this.router.navigate(['teacherlogin'])
}

}
