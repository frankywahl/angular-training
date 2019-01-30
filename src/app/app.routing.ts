import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './router/auth-guard-service';
import { LoginComponent } from './router/login/login.component';

const appRoutes: Routes = [
  {
    path: '', component: StoreViewComponent,
  },
  {
    path: 'cart', component: CartViewComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
  },
  {
    path: 'checkout', component: CheckoutViewComponent, canActivate: [AuthGuard],
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
