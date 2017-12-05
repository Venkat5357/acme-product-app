import { Component, OnInit } from '@angular/core';
import {IProduct} from '../products';
import {ProductsService} from '../products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImages: boolean = false;
   _listFilter: string;

   errorMessage: any;


  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] ;
  products: IProduct[] = [];

  constructor(private _productService: ProductsService) {

    this.listFilter = 'cart';
  }

  ngOnInit() {
    console.log('in ngOnInit lifecycle hook');
     this._productService.getProduts()
         .subscribe(products => {
           this.products = products;
           this.filteredProducts = this.products;
         },
           error => this.errorMessage = <any>error);
  }

  toggleImages(): void {

    this.showImages = !this.showImages;
  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLowerCase();

    return this.products.filter((product: IProduct) =>
    product.productName.toLowerCase().indexOf(filterBy) !== -1);

  }

  onNotify(message: string) {

    console.log(message);
  }

}
