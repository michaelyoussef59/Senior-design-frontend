import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private jsonDataSubject = new BehaviorSubject<any>(null);
  jsonData = this.jsonDataSubject.asObservable();

  constructor(private http: HttpClient) {}
  apiUrl = environment.apiKey;
  usersApiUrl = this.apiUrl + '/users';

  getUsers() {
    this.http.get(this.usersApiUrl, { responseType: 'text' }).subscribe(
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

  addUser(userID: string, email: string): Observable<any> {
    // const url = 'https://your-api-url.com/addUser';
    
    // Headers if needed
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });

    // Data to send
    const body = {
      userId: userID,
      email: email
    };

    return this.http.post(this.usersApiUrl, body);
    // return this.http.post(url, body, { headers: headers });
  }


  addUserParams(params: any): Observable<any> {
    // const url = 'https://your-api-url.com/addUser';
    
    // Headers if needed
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });

    // Data to send

    return this.http.post(this.usersApiUrl, params);
    // return this.http.post(url, body, { headers: headers });
  }
}
