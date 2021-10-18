import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';

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




const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"EmiCalculator",component:EmiCalcComponent},
  // {path:"LoginMain",component:MainComponent},
  {path:"user",component:UserloginComponent},
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    NgbModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
