import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab4RoutingModule } from './tab4-routing.module';
import { CustomHeaderModule } from '../custom-header/custom-header.module';
import { Tab4Component } from './tab4.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [Tab4Component],
  imports: [
    CommonModule,
    IonicModule,
    Tab4RoutingModule,
    CustomHeaderModule
  ],
})
export class Tab4Module { }
