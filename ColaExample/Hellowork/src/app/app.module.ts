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

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ShowitDirective,
    ErrpageComponent,
    // CheckoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MyCopModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
