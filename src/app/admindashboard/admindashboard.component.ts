import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppliedLoanList } from '../AppliedLoanList';
import { ApprovedUserList } from '../ApprovedUserList';
import { PendingUserList } from '../PendingUserList';
import { RejectedUserList } from '../RejectedUserList';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private service: UserServiceService ,private router:Router) { }

  adminName:any;
  adminId:any;


  sidebarState:number=1;

  loanApplied:number=0;
  loanApproved:number=0;
  loanRejected:number=0;

  approvedUserList: ApprovedUserList[]= [];
  pendingUserList :PendingUserList[] =[];
  rejectedUserList: RejectedUserList[]= [];

  ngOnInit(): void {
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');

    if(this.adminId==null)
    {
      this.router.navigate(['Login']);
    }

    this.service.viewApproved()
    .subscribe(data => this.approvedUserList = data);

    this.service.viewPending()
    .subscribe(data => this.pendingUserList  = data);

    this.service.viewRejected()
    .subscribe(data => this.rejectedUserList = data);


    setTimeout(() =>{
      this.loanApplied=this.pendingUserList.length
      this.loanApproved=this.approvedUserList.length
      this.loanRejected=this.rejectedUserList.length;
   }, 1000);


  }

  dashboard()
  {
    this.sidebarState=1;
    console.log(this.sidebarState);
  }
  loanAppl()
  {
    this.sidebarState=2;
    console.log(this.sidebarState);
  }
  approvedList(){
    this.sidebarState=3;
    console.log(this.sidebarState);
  }
  rejectedlist(){
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
