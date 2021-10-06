import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth-guard/guard.guard';

const routes: Routes = [
  {
    path : "" ,
    loadChildren : () => import('src/app/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path : "dashboard",
    loadChildren : () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate : [GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
