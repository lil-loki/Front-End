import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from '../Loan';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-loanapplication',
  templateUrl: './loanapplication.component.html',
  styleUrls: ['./loanapplication.component.css']
})
export class LoanapplicationComponent implements OnInit {

  pageState:number=1;
  applicationStatus:any;
  interestRate:any;
  loanAmount:any;
  loanStatus:any;
  processingFee:any;
  tenure:any;
  loantype:any;
  user_id:any;
  selectedEMI!:any;
  emi:number=0;
  registerForm: any;


  constructor(private service:UserServiceService,private router:Router) { }

  loanRegister: any;
  ngOnInit(): void {
    this.user_id=sessionStorage.getItem('userId');
    if(this.user_id==null)
    {
      this.router.navigate(['Login']);
    }

    this.loanRegister = new FormGroup({
      "loanAmount": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "loantype": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    });
    
    
  }
 
  get loanamount() { return this.registerForm.get('loanAmount'); }
  get Loantype() { return this.registerForm.get('loantype'); }

  selectChangeHandler() {
    if(this.tenure==6)
    {
      this.interestRate=7;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==12)
    {
      this.interestRate=7.5;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==24)
    {
      this.interestRate=8;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==36)
    {
      this.interestRate=8.5;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==48)
    {
      this.interestRate=9;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==60)
    {
      this.interestRate=9.5;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==72)
    {
      this.interestRate=10.5;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    else if(this.tenure==84)
    {
      this.interestRate=11;
      this.emi= Math.round((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    }
    console.log(this.emi);



  }

  registerloan()
  {

    var loan=new Loan();
    loan.applicationStatus="Pending";
    loan.interestRate=this.interestRate;
    loan.loanAmount=this.loanAmount;
    loan.loantype=this.loantype;
    loan.processingFee=2000;
    loan.loanEndDate=new Date(new Date().setMonth(new Date().getMonth() + Number(this.tenure)));
    loan.loanStartDate=formatDate(new Date(), 'yyyy-MM-dd', 'en');
    loan.loanStatus="New";
    loan.tenure=this.tenure;
    loan.user_id=this.user_id;
    loan.emi = this.emi;

    this.service.registerloan(loan).subscribe(
      (      loan: { status: string; })=>{
        if(loan.status=='SUCCESS')
        {
          console.log(loan)
          alert("New Loan Registered!!");
          this.pageState=2;
        }
        else
        {
          alert("Loan Already Exists!!");
        }
    }
    )
  }
}
