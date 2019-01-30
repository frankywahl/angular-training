import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Response {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  submit(form): Observable<Response> {
    return this.http.post<Response>('http://localhost:8000/checkout', form);
  }
}
