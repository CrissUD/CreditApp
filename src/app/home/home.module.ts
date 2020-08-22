import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ClientQueryComponent } from './components/client-query/client-query.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ClientQueryComponent,
    FeaturesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
