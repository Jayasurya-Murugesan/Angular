import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMainHeaderComponent } from './header/top-main-header/top-main-header.component';
import { BottomMainHeaderComponent } from './header/bottom-main-header/bottom-main-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './container/search/search.component'
import { FormsModule } from '@angular/forms';
import { ProdListComponent } from './container/prod-list/prod-list.component';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './container/prod-list/product/product.component';
import { FilterComponent } from './container/prod-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { SetBackground } from './CustomDirective/SetBackground.directive';
import { Highlight } from './CustomDirective/Highlight.directive';
import { Apphover } from './CustomDirective/hover.directive'
import { DisableProduct } from './CustomDirective/disableProduct.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMainHeaderComponent,
    BottomMainHeaderComponent,
    ProductListComponent,
    SearchComponent,
    ProdListComponent,
    ContainerComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    SetBackground,
    Highlight,
    Apphover,
    DisableProduct

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
