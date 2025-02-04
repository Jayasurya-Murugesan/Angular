import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = 'dress';
  randomText: string = '';
  content: string[] = ['content1', 'conent2'];
  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
