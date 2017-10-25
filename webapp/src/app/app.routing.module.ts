import { ManterHoraComponent } from './views/manter-hora/manter-hora.component';
import { ManterDiaComponent } from './views/manter-dia/manter-dia.component';
import { ManterBoxComponent } from './views/manter-box/manter-box.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'manter-box', component: ManterBoxComponent},
  { path: 'manter-dia', component: ManterDiaComponent},
  { path: 'manter-hora', component: ManterHoraComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
