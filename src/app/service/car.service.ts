import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators' 

export interface ICar {
  Make_ID: number;
  Make_Name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url : string = "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json"

  constructor(private http:HttpClient) { }

  getCars(): Observable<ICar[]>{
    return this.http.get<{ Results: ICar[] }>(this.url).pipe(
      map((response) => response.Results) // Extract Results array
    );
  }
}
