import { Injectable } from '@angular/core';
import { environment } from './envoirment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this._http.get(`${this.apiUrl}/users`);
  }
  getSingleUser(id: any): Observable<any> {
    var ids = id;
    return this._http.get(`${this.apiUrl}/users/${ids}`);
  }

  deleteUser(id: any): Observable<any> {
    var ids = id;
    return this._http.delete(`${this.apiUrl}/users/${ids}`);
  }

  createData(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/users/`, data);
  }

  updateUser(data: any, id: any) {
    let ids = id;
    return this._http.put(`${this.apiUrl}/users/${ids}`, data);
  }
}
