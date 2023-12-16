import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu.component';

import { AppRoutingModule } from '../../app-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    NavigationMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [
    NavigationMenuComponent,
  ]
})
export class NavigationMenuModule { }
