import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexS1Component } from './index-s1/index-s1.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    IndexS1Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
