import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Products } from '../Shared/Products';

@Component({
  selector: 'selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionListComponent implements OnInit {
  products: Array<Products>;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

}
