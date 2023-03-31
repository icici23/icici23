import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'MCA',pathMatch:'full'},
  {path:'MCA',loadChildren:()=>import('./Modules/mca/mca.module').then((m)=>m.MCAModule),},
  {path:'**',loadChildren:()=>import('./Modules/mca/mca.module').then((m)=>m.MCAModule),}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
