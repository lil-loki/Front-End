import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppliedLoanList } from '../AppliedLoanList';
import { ApprovedUserList } from '../ApprovedUserList';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-approveloanlist',
  templateUrl: './approveloanlist.component.html',
  styleUrls: ['./approveloanlist.component.css']
})
export class ApproveloanlistComponent implements OnInit {

  approvedUserList: ApprovedUserList[]= [];

  adminName:any;
  adminId:any;
  constructor (private service:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.adminName=sessionStorage.getItem('adminName');
    this.adminId=sessionStorage.getItem('adminId');
    if(this.adminId==null)
    {
      this.router.navigate(['admin']);
    }
    this.service.viewApproved()
    .subscribe(data => this.approvedUserList = data);

}

}
