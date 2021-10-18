import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprenantsPageRoutingModule } from './apprenants-routing.module';

import { ApprenantsPage } from './apprenants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprenantsPageRoutingModule
  ],
  declarations: [ApprenantsPage]
})
export class ApprenantsPageModule {}
