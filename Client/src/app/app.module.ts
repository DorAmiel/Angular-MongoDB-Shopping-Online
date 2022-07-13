import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDownComponent } from './components/navbar/navbar-down/navbar-down.component';
import { NavbarUpComponent } from './components/navbar/navbar-up/navbar-up.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { BasketProductComponent } from './components/basket-product/basket-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDownComponent,
    NavbarUpComponent,
    SidebarComponent,
    BodyComponent,
    SlideshowComponent,
    ProductCardComponent,
    SignupComponent,
    HomePageComponent,
    SigninComponent,
    BasketProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
