import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImage = true;
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

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
