import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-checkeligibility',
  templateUrl: './checkeligibility.component.html',
  styleUrls: ['./checkeligibility.component.css']
})
export class CheckeligibilityComponent implements OnInit {

  stat!: string;

  constructor(private router:Router) { }

  principal:number=400000;
  rate:number=9;
  tenure:number=60;
  emi:number=0;
  monthlysavings: number=0;
  existingemi: number=0;
  numerator:number=0;
  denominator:number=0;


  ngOnInit(): void {

  }





 checkeligiblity(){

  this.numerator=Math.pow((1+(this.rate/12/100)),this.tenure);
  this.denominator=Math.pow((1+(this.rate/12/100)),this.tenure)-1;

  this.emi=this.principal*(this.rate/12/100)*(this.numerator/this.denominator)
  if ((this.emi+this.existingemi)<=this.monthlysavings)
  {
      this.stat="You are Eligible!";
      alert(this.stat);
  }
   else
   {
     this.stat="Sorry,you aren't eligible:(";
     alert(this.stat);
     this.router.navigate(['UserDashboard'])
   }
  }

}
