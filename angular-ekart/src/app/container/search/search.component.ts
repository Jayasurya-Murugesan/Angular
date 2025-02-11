import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  randomText: string = '';
  content: string[] = ['content1', 'conent2'];

  @ViewChild('searchInput')
  searchInputElement: ElementRef;

  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText)

    // this.searchText = event.target.value;
  }

  onSearchTextChange() {
  }

}
