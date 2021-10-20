import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppliedLoanList } from 'src/app/AppliedLoanList';
import { Loan } from 'src/app/Loan';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-userdashmain',
  templateUrl: './userdashmain.component.html',
  styleUrls: ['./userdashmain.component.css']
})
export class UserdashmainComponent implements OnInit {

  constructor(private service: UserServiceService ,private router:Router) { }

  userName:any;
  userId:any;
  userLast:any;
  userAge:any;
  userAddress:any;
  userEmail:any;
  userGender:any;
  userZip:any;
  sidebarState:number=1;

  loanApplied:number=0;
  loanApproved:number=0;
  loanRejected:number=0;
  LoanList : AppliedLoanList[] = [];

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('userName');
    this.userId=sessionStorage.getItem('userId');
    this.userLast=sessionStorage.getItem('userLast');
    this.userAge=sessionStorage.getItem('userAge');
    this.userAddress=sessionStorage.getItem('userAddress');
    this.userEmail=sessionStorage.getItem('userEmail');
    this.userGender=sessionStorage.getItem('userGender');
    this.userZip=sessionStorage.getItem('userZip');

    if(this.userId==null)
    {
      this.router.navigate(['Login']);
    }
    this.service.viewloanstatus(this.userId).subscribe(
      data => {
        this.LoanList = data
      }
    );

    console.log(this.LoanList);

    setTimeout(() =>{
      this.LoanList.forEach(element => {
        if(element.applicationStatus=="Pending"){
          console.log(element.applicationStatus);

          this.loanApplied+=1;
        }
        else if(element.applicationStatus=="Approved"){
          console.log(element.applicationStatus);
          this.loanApproved+=1;
        }
        else{
          console.log(element.applicationStatus);
          this.loanRejected+=1;
        }
      });
   }, 2000);


  }

  dashboard()
  {
    this.sidebarState=1;
    console.log(this.sidebarState);
  }
  bankAccount()
  {
    this.sidebarState=2;
    console.log(this.sidebarState);
  }
  loanAppl()
  {
    this.sidebarState=3;
    console.log(this.sidebarState);
  }
  checkEligibility()
  {
    this.sidebarState=4;
    console.log(this.sidebarState);
  }

  logout(){
    sessionStorage.clear();
    setTimeout(function(){
      window.location.href = '';
   }, 1000);
  }

}
