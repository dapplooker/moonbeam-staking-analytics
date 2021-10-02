import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

const routes: Routes = [
  { path: "", component: DashboardContainerComponent },
  { path: "nominator", component: DashboardContainerComponent },
  { path: "collator", component: DashboardContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
