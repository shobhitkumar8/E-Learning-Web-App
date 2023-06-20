import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  url= "https://localhost:44310/api/Attendance/GetAll";

  constructor(private http:HttpClient ) {}

  getattendance():Observable<Attendance[]>{

    return this.http.get<Attendance[]>(this.url);

  }
  
}
