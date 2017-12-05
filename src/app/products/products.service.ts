import { Injectable } from '@angular/core';
import {IProduct} from './products';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  private _productsUrl = 'assets/products.json';

  constructor(private _http: HttpClient) { }


getProduts(): Observable<IProduct[]> {

    return this._http.get<IProduct[]>(this._productsUrl)
      .do(data => console.log('All ::' + JSON.stringify(data)))
      .catch(this.handleError);
}

  getProduct(id: number): Observable<IProduct> {
    return this.getProduts()
      .map((products: IProduct[]) => products.find(p => p.productId === id));
  }

handleError(err: HttpErrorResponse) {

 return Observable.throw(err.message);
}

}
