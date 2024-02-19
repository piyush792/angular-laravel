import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  signup(data: any) {
    return this._http.post('http://127.0.0.1:8000/api/signup', data);
  }
  login(data: any) {
    return this._http.post('http://127.0.0.1:8000/api/login', data);
  }
}
