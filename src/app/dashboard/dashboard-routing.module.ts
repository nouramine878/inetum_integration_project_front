import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from '../auth-guard/guard.guard';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"", component : DashboardComponent , children :[
    {path:"", component : CategoryComponent},
    {path:"product/:id", component:ProductComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
