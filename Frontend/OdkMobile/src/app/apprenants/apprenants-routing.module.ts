import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprenantsPage } from './apprenants.page';

const routes: Routes = [
  {
    path: '',
    component: ApprenantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprenantsPageRoutingModule {}
