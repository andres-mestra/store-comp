import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total: number = 0;
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
      image: './assets/images/tennis_blue.jpg',
      price: 400,
    },
    {
      id: 3,
      name: 'Croydon tennis',
      image: './assets/images/tennis_black.jpg',
      price: 500,
    },
    {
      id: 4,
      name: 'Croydon tennis',
      image: './assets/images/tennis_wow.jpg',
      price: 450,
    },
    {
      id: 5,
      name: 'Croydon tennis',
      image: './assets/images/tennis_green.jpg',
      price: 890,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce(
      (suma, item) => suma + item.price,
      0
    );
  }
}
