import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Component({
  templateUrl: 'productList.component.html'
})

export class ProductListComponent implements OnInit {
  categories: Category[];
  products: Product[];
  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client.get('/api/product/listCategories?num=5').subscribe((result) => {
      if (result) {
        this.categories = result as Category[];
      }
    });
    this.client.get('/api/product/listProducts?num=12').subscribe((result) => {
      if (result) {
        this.products = result as Product[];
      }
    });
  }
}
