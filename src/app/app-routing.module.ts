import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photo',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'photo',
    loadChildren: () =>
      import('./photo/photo.module').then((m) => m.PhotoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
