import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashmain',
  templateUrl: './userdashmain.component.html',
  styleUrls: ['./userdashmain.component.css']
})
export class UserdashmainComponent implements OnInit {

  constructor(private router:Router) { }

  userName:any;
  userId:any;
  userLast:any;
  userAge:any;
  userAddress:any;
  userEmail:any;
  userGender:any;
  userZip:any;
  sidebarState:number=2;

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
