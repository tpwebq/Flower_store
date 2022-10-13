import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutS1Component } from './about-s1/about-s1.component';
import { AboutS2Component } from './about-s2/about-s2.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutS1Component,
    AboutS2Component,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
