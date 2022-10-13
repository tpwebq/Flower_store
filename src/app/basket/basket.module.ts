import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketS1Component } from './basket-s1/basket-s1.component';
import { BasketS2Component } from './basket-s2/basket-s2.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PaymentDataComponent } from './payment-data/payment-data.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PayWithComponent } from './pay-with/pay-with.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BasketComponent } from './basket.component';


@NgModule({
  declarations: [
    BasketS1Component,
    BasketS2Component,
    OrderDetailsComponent,
    PaymentDataComponent,
    PaymentDetailsComponent,
    PayWithComponent,
    PersonalDataComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
