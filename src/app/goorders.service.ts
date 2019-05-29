import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ParseTreeResult } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class GoordersService {
  baseUrl: string = '/';
  orders: Order[] = [];
  // dogIndex: Map<string,Dog> = new Map<string,Dog>()

  constructor(private http: HttpClient) { }

  all():Observable<Order[]> {
    // return this.orders;  >>> JSON version
    console.log('Making request to get all')
    return this.http.post('/get-all', {})
                    .pipe(map(x => {
                      console.log(x);
                      this.parseResult(x);
                      return <Order[]>x}));
  }

  parseResult(x) {
    if (x.s0 != null) {
      
      //var order = new Order(){
        

      };
    }
  }

}
