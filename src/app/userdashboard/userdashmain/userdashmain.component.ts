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

  handler:any = null;
  userName:any;
  userId:any;
  userLast:any;
  userAge:any;
  userAddress:any;
  userEmail:any;
  userGender:any;
  userZip:any;
  sidebarState:number=1;

  color:string="yellow"

  loanApplied:number=0;
  loanApproved:number=0;
  loanRejected:number=0;
  LoanList : AppliedLoanList[] = [];

  ngOnInit(): void {

    this.loadStripe();
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

  pay(amount: any,status:any) {

    if(status=="Approved")
    {
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51Jmvw6SETkxKweHmzqVEfrk0TX374vLBK7FdVaIsB3JKlTXvgDyxWwqgE9ghaexox8ZZn1AcbPx7tgDCeOqYu09e00AQtuvb7p',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });

      handler.open({
        name: 'Loan Lae Loo',
        description: 'Payment Portal',
        amount: amount * 100
      });
    }
    else{
      alert("Loan Is Not Yet Approved")
    }
  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Jmvw6SETkxKweHmzqVEfrk0TX374vLBK7FdVaIsB3JKlTXvgDyxWwqgE9ghaexox8ZZn1AcbPx7tgDCeOqYu09e00AQtuvb7p',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }

}
