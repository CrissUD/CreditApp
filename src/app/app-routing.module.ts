import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: 'client',
          loadChildren: () => import('./client/client.module').then((m) => m.ClientModule),
        },
        {
          path: 'credit',
          loadChildren: () => import('./credit/credit.module').then((m) => m.CreditModule),
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
