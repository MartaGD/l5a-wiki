import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { iClan } from './model/iClan';

import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  getJSONProfile(url:string): Observable<any[]>{
    return this.http.get<any[]>("../assets/"+url);
  }


   
} 


 

