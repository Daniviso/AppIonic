import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomHeaderRoutingModule } from './custom-header-routing.module';
import { CustomHeaderComponent } from './custom-header.component';


@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomHeaderRoutingModule
  ],
  exports:[CustomHeaderComponent]
})
export class CustomHeaderModule { }
