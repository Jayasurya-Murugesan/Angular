import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMainHeaderComponent } from './header/top-main-header/top-main-header.component';
import { BottomMainHeaderComponent } from './header/bottom-main-header/bottom-main-header.component';
import { ProductListComponent } from './product-list/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMainHeaderComponent,
    BottomMainHeaderComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
