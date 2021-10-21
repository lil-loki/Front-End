import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../Loan';
import { PendingUserList } from '../PendingUserList';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-loanapproval',
  templateUrl: './loanapproval.component.html',
  styleUrls: ['./loanapproval.component.css']
})
export class LoanapprovalComponent implements OnInit {

  pendingUserList :PendingUserList[] =[];
  adminName:any;
  adminId:any;
  loanId!: number;
  constructor (private service:UserServiceService, private router:Router) { }

  approveLoan(loanId: any)
  {
    this.loanId=loanId;
    console.log(loanId);
    this.service.approveLoan(loanId).subscribe(
      data => {
         this.loanId= data;
      }
    );
    window.location.reload();
  }

  rejectLoan(loanId:any)
  {
    this.loanId=loanId;
    console.log(loanId);
    this.service.rejectLoan(loanId).subscribe(
      data => {
         this.loanId= data;
      }
    );
    window.location.reload();
  }

  ngOnInit() {
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }
    this.service.viewPending().subscribe(
      data => {
        this.pendingUserList = data
      }
    );
  }
}


