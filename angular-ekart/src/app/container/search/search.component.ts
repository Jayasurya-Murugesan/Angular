import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  randomText: string = '';
  content: string[] = ['content1', 'conent2'];

  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

  onSearchTextChange() {
    this.SearchTextChanged.emit(this.searchText)
  }

}
