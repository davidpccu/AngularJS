import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ErrpageComponent } from './errpage/errpage.component';

const homeRoure: Route = { path: '', redirectTo: 'errpage', pathMatch: 'full' };
const myRoutes: Routes = [
  homeRoure,
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2/:id', component: Comp2Component },
  { path: 'comp2', redirectTo: 'SSS' },
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
