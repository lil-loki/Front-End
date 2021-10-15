import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css'],
  providers: []
})
export class EmiCalcComponent implements OnInit {



  constructor() {
  }

  data: any;
  chartOptions: any;

  emiState:boolean=false;

  principal:number=400000;
  rate:number=9;
  tenure:number=60;


  emi:number=0;
  exactEmi:number=0;
  totalInterest:number=0;
  totalPayment:number=0;
  numerator:number=0;
  denominator:number=0;
  p1:number=0;
  p2:number=0;

  pp:number=0;
  tmp:number=0;
  olb:number=0;

  pparr:any = [];



  ngOnInit(): void {
    // this.getEmi()
  }

  getEmi(){

   this.emiState=true;

  this.numerator=Math.pow((1+(this.rate/12/100)),this.tenure);
  this.denominator=Math.pow((1+(this.rate/12/100)),this.tenure)-1;

  this.emi=this.principal*(this.rate/12/100)*(this.numerator/this.denominator)
  this.exactEmi=this.emi;

  this.totalPayment=this.emi*this.tenure;
  this.totalPayment=Math.round(this.totalPayment);
  this.totalInterest=this.totalPayment-this.principal;
  this.emi=Math.round(this.emi);

  // this.emi=Math.round((this.emi+Number.EPSILON) * 100) / 100;
  // this.emi=Number(this.emi.toFixed(5))

  this.p1=Number(((this.principal/(this.totalPayment))*100).toFixed(2));
  this.p2=Number((100-this.p1).toFixed(2));

  this.pparr=[];
  this.olb=this.principal;

  for (let i = 0; i < this.tenure; i++) {
    // this.pp=Math.round(this.emi-(this.olb*(this.rate/12/100)))
    this.pp=this.emi-(this.olb*(this.rate/12/100))
    // this.olb-=Math.floor(this.pp)

    this.olb-=this.pp+(this.emi-this.pp)-Math.floor(this.emi-this.pp);
    if(this.olb>0){
      this.olb=this.olb;
    }
    else{
      this.olb=0;
    }

    // this.pparr.push({mp:Math.floor(this.pp),mi:this.emi-Math.floor(this.pp),olb:this.olb})
    this.pparr.push({mp:this.pp+(this.emi-this.pp)-Math.floor(this.emi-this.pp),mi:Math.floor(this.emi-this.pp),olb:this.olb})

  }

  this.data = {
    labels: ['Principal Loan Amount %','Total Interest %'],
    datasets: [
        {
            data: [this.p1, this.p2],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784"
            ]
        }
    ]
};

}

}
