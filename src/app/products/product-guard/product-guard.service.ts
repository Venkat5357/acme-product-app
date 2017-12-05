import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router : Router) { }


  canActivate(route: ActivatedRouteSnapshot) : boolean {

    let id =  +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert("invalid Product Id");
      this.router.navigate(['/products']);
      return false;
    };

    return true;
  }

}
