import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private jsonDataSubject = new BehaviorSubject<any>(null);
  jsonData = this.jsonDataSubject.asObservable();

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiKey;
  usersApiUrl = this.apiUrl + 'prod/users';

  getUsers() {
    this.http.get(this.usersApiUrl, { responseType: 'text'}).subscribe(
      (response: string) => {
        console.log(response);
      },
      (error: any) => {
        console.error('error occurred: ', error);
      }
    );
  }

  fetchData() {
    return this.http.get<any>(this.usersApiUrl);
  }
}
