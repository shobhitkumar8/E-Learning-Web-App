import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  [x: string]: any;

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
  getCsharpJson(){
    return this.http.get<any>("assets/csharp.json");
  }
}
