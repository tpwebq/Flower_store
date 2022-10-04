import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingsoonRoutingModule } from './comingsoon-routing.module';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';


@NgModule({
  declarations: [
    ComingsoonComponent
  ],
  imports: [
    CommonModule,
    ComingsoonRoutingModule
  ]
})
export class ComingsoonModule { }
