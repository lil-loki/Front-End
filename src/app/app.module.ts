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




const routes:Routes=[
  // {path:"",component:EmiCalcComponent},
  {path:"EmiCalculator",component:EmiCalcComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmiCalcComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    NgbModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
