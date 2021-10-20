import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilecardsComponent } from './aboutus/profilecards/profilecards.component';
import { ProfileComponent } from './aboutus/profile/profile.component';
import { MainComponent } from './login/main/main.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './login/register/register.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { VehicleregistrationComponent } from './vehicleregistration/vehicleregistration.component';
import { UserdashmainComponent } from './userdashboard/userdashmain/userdashmain.component';
import { SidebarComponent } from './userdashboard/sidebar/sidebar.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { AccountregistrationComponent } from './accountregistration/accountregistration.component';





const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"EmiCalculator",component:EmiCalcComponent},
  {path:"Login",component:MainComponent},
  {path:"UserLogin",component:UserloginComponent},
  {path:"AdminLogin",component:AdminloginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"LoanApplication",component:LoanapplicationComponent},
  {path:"VehicleRegistration",component:VehicleregistrationComponent},
  {path:"UserDashboard",component:UserdashmainComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmiCalcComponent,
    FooterComponent,
    ProfilecardsComponent,
    ProfileComponent,
    MainComponent,
    UserloginComponent,
    AdminloginComponent,
    HomeComponent,
    RegisterComponent,
    LoanapplicationComponent,
    VehicleregistrationComponent,
    UserdashmainComponent,
    SidebarComponent,
    CheckeligibilityComponent,
    AccountregistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    NgbModule,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
