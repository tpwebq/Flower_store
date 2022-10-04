import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComingsoonComponent} from "./comingsoon/comingsoon/comingsoon.component";
import {ErrorComponent} from "./error/error/error.component";
import {PrivacyComponent} from "./privacy/privacy/privacy.component";

const routes: Routes = [
  {
    path:"",
    component: ComingsoonComponent
  },
  {
    path:"privacy",
    component: PrivacyComponent
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
