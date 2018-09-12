import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { HttpClientModule } from '@angular/common/http';
// import { CheckoutComponent } from './checkout/checkout.component';
import { MyCopModule } from '../checkout/my-cop/my-cop.module';
import { ShowitDirective } from './showit.directive';
import { AppRoutingModule } from './/app-routing.module';
import { ErrpageComponent } from './errpage/errpage.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ShowitDirective,
    ErrpageComponent,
    Comp2Component,
    Comp3Component,
    // CheckoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MyCopModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
