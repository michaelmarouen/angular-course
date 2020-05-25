import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { StarComponent } from './shared/ui/star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './product/product-list/carousel-basic';

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    WelcomeComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
