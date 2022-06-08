import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./cursos/cursos.module').then((mod) => mod.CursosModule),
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./alunos/alunos.module').then((mod) => mod.AlunosModule),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
