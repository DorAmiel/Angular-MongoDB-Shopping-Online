import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDownComponent } from './components/navbar/navbar-down/navbar-down.component';
import { NavbarUpComponent } from './components/navbar/navbar-up/navbar-up.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDownComponent,
    NavbarUpComponent,
    MainBodyComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
