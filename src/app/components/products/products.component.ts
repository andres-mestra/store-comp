import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Tennis Nike',
      image: './assets/images/tennis.jpg',
      price: 100,
    },
    {
      id: 2,
      name: 'Super tennis',
      image: './assets/images/tennis.jpg',
      price: 400,
    },
    {
      id: 3,
      name: 'Croydon tennis',
      image: './assets/images/tennis.jpg',
      price: 500,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
