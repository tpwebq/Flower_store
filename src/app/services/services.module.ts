import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesS1Component } from './services-s1/services-s1.component';
import { FiltersPanelComponent } from './filters-panel/filters-panel.component';
import { ListComponent } from './list/list.component';
import { ServicesComponent } from './services.component';
import { ServicesS2Component } from './services-s2/services-s2.component';


@NgModule({
  declarations: [
    ServicesS1Component,
    FiltersPanelComponent,
    ListComponent,
    ServicesComponent,
    ServicesS2Component
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
