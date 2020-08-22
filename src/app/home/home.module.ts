import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ClientQueryComponent } from './components/client-query/client-query.component';
import { FeaturesComponent } from './components/features/features.component';
import { FrontComponent } from './components/front/front.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, ClientQueryComponent, FeaturesComponent, FrontComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
