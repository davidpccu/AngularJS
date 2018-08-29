import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ErrpageComponent } from './errpage/errpage.component';

const myRoutes: Routes = [
  { path: '', redirectTo: 'errpage', pathMatch: 'full' },
  { path: 'comp1', component: Comp1Component },
  { path: 'check1', component: CheckoutComponent },
  { path: 'check2', component: CheckoutComponent },
  { path: 'errpage', component: ErrpageComponent },
  { path: '**', component: ErrpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
