import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders} from '@angular/common/http';
export interface BloodExam {
      _id:String;
      name:string;
      lastname: string;
      cc: string;
      sugar: Number;
      fat: Number;
      oxygen: Number;
      result: string;
      fullName: string;

}
@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  private readonly API = environment.api;
  constructor(private readonly http: HttpClient) { }

  getBloodExamByCc(cc: string):Observable<BloodExam[]>{ 
    return this.http.get<BloodExam[]>(`${this.API}/examlist/${cc}`);
  }

  postCalculateBloodExam(bloodExam :BloodExam): Observable<BloodExam> {

    return this.http.post<BloodExam>(this.API,bloodExam);

  }
}
