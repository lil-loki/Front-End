import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RejectedUserList } from '../RejectedUserList';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-rejectedloanlist',
  templateUrl: './rejectedloanlist.component.html',
  styleUrls: ['./rejectedloanlist.component.css']
})
export class RejectedloanlistComponent implements OnInit {

  rejectedUserList: RejectedUserList[]= [];

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
    this.service.viewRejected()
    .subscribe(data => this.rejectedUserList = data);

}

}
