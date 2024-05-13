import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  }
];
