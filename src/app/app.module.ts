import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from "./about/about.module";
import { BasketModule } from "./basket/basket.module";
import { ComingsoonModule } from "./comingsoon/comingsoon.module";
import { ContactModule } from "./contact/contact.module";
import { ErrorModule } from "./error/error.module";
import { HomeModule } from "./home/home.module";
import { PrivacyModule } from "./privacy/privacy.module";
import { ServicesModule } from "./services/services.module";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BasketModule,
    ComingsoonModule,
    ContactModule,
    ErrorModule,
    HomeModule,
    PrivacyModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
