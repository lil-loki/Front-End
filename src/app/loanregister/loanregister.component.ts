import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Loan } from '../Loan';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-loanregister',
  templateUrl: './loanregister.component.html',
  styleUrls: ['./loanregister.component.css']
})
export class LoanregisterComponent implements OnInit {
  applicationStatus:String="";
  interestRate:number=0;
  loanAmount:number=0;
  loanStatus:String="";
  processingFee:number=0;
  tenure:number=0;
  loantype:String="";
  user_id:any;
  selectedEMI!: string;

  emi:number=this.loanAmount/this.tenure;
  router: any;
 

  constructor(private service:UserServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectChangeHandler() {
    console.log(this.user_id);
      if(this.tenure==6)
      {
        this.selectedEMI="7%";
      }
      else if(this.tenure==12)
      {
        this.selectedEMI="7.5%";
      }
      else if(this.tenure==24)
      {
        this.selectedEMI="8%";
      }
      else if(this.tenure==36)
      {
        this.selectedEMI="8.5%";
      }
      else if(this.tenure==48)
      {
        this.selectedEMI="9%";
      }
      else if(this.tenure==60)
      {
        this.selectedEMI="9.5%";
      }
      else if(this.tenure==72)
      {
        this.selectedEMI="10.5%";
      }
      else if(this.tenure==84)
      {
        this.selectedEMI="11%";
      }
  } 

  registerloan()
  {
    if(this.tenure==6)
    {
      this.interestRate=7;
    }
    else if(this.tenure==12)
    {
      this.interestRate=7.5;
    }
    else if(this.tenure==24)
    {
      this.interestRate=8;
    }
    else if(this.tenure==36)
    {
      this.interestRate=8.5;
    }
    else if(this.tenure==48)
    {
      this.interestRate=9;
    }
    else if(this.tenure==60)
    {
      this.interestRate=9.5;
    }
    else if(this.tenure==72)
    {
      this.interestRate=10.5;
    }
    else if(this.tenure==84)
    {
      this.interestRate=11;
    }


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

    loan.emi = ((this.loanAmount * ((this.interestRate / 100) / 12)) * ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) / ((Math.pow((1 + ((this.interestRate / 100) / 12)), this.tenure)) - 1)));
    this.service.registerloan(loan).subscribe(
      (      loan: { status: string; })=>{
        if(loan.status=='SUCCESS')
        {
          console.log(loan)
          alert("New Loan Registered!!");
          this.router.navigate(['loginsuccess'])
        }
        else
        {
          alert("Loan Already Exists!!");
        }
    }
    )
  }
}
