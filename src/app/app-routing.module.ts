import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../app/login/login.component';
import { MainComponent } from './../app/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { APISwaggerUIComponent } from './apiswagger-ui/apiswagger-ui.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  {
    path: 'api-docs',
    component: APISwaggerUIComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
