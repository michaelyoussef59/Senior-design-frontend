import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesspointsComponent } from './accesspoints/accesspoints.component';
import { AccesslevelsComponent } from './accesslevels/accesslevels.component';
import { UsersComponent } from './users/users.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { OperatorsComponent } from './operators/operators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { APISwaggerUIComponent } from './apiswagger-ui/apiswagger-ui.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AccesspointsComponent,
    AccesslevelsComponent,
    UsersComponent,
    SchedulesComponent,
    OperatorsComponent,
    LoginComponent,
    APISwaggerUIComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
