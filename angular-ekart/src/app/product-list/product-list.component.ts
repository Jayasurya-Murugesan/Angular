import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  song = 'good';
  viewImage = true;
  product = {
    name: 'apple',
    price: 10,
    isAvailable: true,
    images: '/assets/images/cute-sheep-kawaii-vector_42136-214.avif',
    isInStock: 1
  }
  getPrice() {
    return 30.2345;
  }

  isClicked() {
    this.viewImage = false;
    alert('hey')
  }
}
