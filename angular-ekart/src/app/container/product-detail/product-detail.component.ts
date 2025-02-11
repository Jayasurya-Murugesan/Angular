import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { ProdListComponent } from '../prod-list/prod-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {


  @Input() prodListComp: ProdListComponent = undefined;
  product: Product;

  ngOnInit() {
    this.product = this.prodListComp.selectedProduct;
  }
}
