import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { RoutingPath } from './enums/routing-path';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: RoutingPath.landing,
    component: LandingComponent
  },
  {
    path: RoutingPath.purchase,
    component: PurchaseComponent
  },
  {
    path: RoutingPath.purchaseList,
    component: PurchaseListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: RoutingPath.landing,
    pathMatch: 'full'
  }
];
