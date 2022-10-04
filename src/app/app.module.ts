import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComingsoonModule} from "./comingsoon/comingsoon.module";
import {ErrorModule} from "./error/error.module";
import {PrivacyModule} from "./privacy/privacy.module";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    ErrorModule,
    PrivacyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
