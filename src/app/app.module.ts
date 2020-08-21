import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [SharedModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
