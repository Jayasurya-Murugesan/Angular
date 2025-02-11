import { Component, Input, ViewChild } from '@angular/core';
import { ProdListComponent } from './prod-list/prod-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  searchText = '';

  @ViewChild('ProdListComponent')
  productListComponent

  setSearchText(value: string) {
    this.searchText = value;
  }
}
