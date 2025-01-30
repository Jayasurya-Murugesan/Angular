import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //wherever we mention this, html of this file will be rendered
  templateUrl: './app.component.html', //or template property
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ekart';
}
