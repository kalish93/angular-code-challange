import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  constructor(private http: HttpClient) { }

   headers = new HttpHeaders({
    'Content-Type': 'application/json'
});
 options = {
    headers: this.headers
};

  getActors(url?:any): Observable<any> {
    if(url){
      return this.http.get<any>(url, this.options);
    }
    return this.http.get<any>("https://swapi-api.hbtn.io/api/people", this.options);
  }

  getActor(id: any): Observable<any> {
    return this.http.get<any>(`https://swapi-api.hbtn.io/api/people/${id}`, this.options);
  }
}
