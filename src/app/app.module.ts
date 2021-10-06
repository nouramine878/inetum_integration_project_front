import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardGuard } from './auth-guard/guard.guard';
import { RouterTestingModule } from "@angular/router/testing";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterTestingModule,
  ],
  providers: [GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
