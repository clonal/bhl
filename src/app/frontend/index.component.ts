import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Component({
  templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {
  homeBanner: string[];
  products: Product[];
  constructor(private client: HttpClient) {}


  ngOnInit(): void {
    this.client.post('/api/menu/homeBanners', {}).subscribe((result) => {
      if (result['banners']) {
        this.homeBanner = result['banners'] as string[];
      }
    });
    this.client.get('/api/product/listProducts?num=8').subscribe((result) => {
      if (result) {
        this.products = result as Product[];
      }
    });
  }
}
