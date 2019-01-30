import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

interface PutResult {
  result: string;
}

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/cart');
  }

  addToCart(plate: LicensePlate): Observable<PutResult> {
    return this.http.put<PutResult>(`http://localhost:8000/cart/${plate._id}`, plate).pipe(
      tap(e => console.log("PUT /cart", e))
    );
  }

  removeFromCart(plate: LicensePlate) {
    // TODO
  }
}
