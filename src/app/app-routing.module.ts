import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APISwaggerUIComponent } from './apiswagger-ui/apiswagger-ui.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'api-docs', component: APISwaggerUIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
