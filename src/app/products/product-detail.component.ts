import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "./products";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "./products.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage : any;
  private sub: Subscription;


  constructor(private _route : ActivatedRoute,
              private _router : Router,
              private _productService : ProductsService) {

  }

  ngOnInit() {

    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProduct(id);
      });

  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }


  onBack() : void {
    this._router.navigate(['/products']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
