import { Injectable } from '@angular/core';
import { Products } from '../Shared/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Products> {
    let products: Array<Products>;
     products = [{
       ProductName: 'Something',
       PriceForProduct: 10,
       ProductImage: 'Image Above of Something'
     },
     {
      ProductName: 'Something Else',
      PriceForProduct: 15,
      ProductImage: 'Image Above of Something Else'
    },
    {
      ProductName: 'Something More',
      PriceForProduct: 18,
      ProductImage: 'Image above of Something More'
    }];

    return products;
  }

}
