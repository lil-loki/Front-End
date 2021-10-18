import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/loginClass';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  email:any
  password:any
  message:any

  constructor(private service: UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    var login=new Login()
    login.email=this.email
    login.password=this.password
    this.service.login(login).subscribe(
      user=>{
        if(user.status=='SUCCESS')
        {
          let userName= user.userNameFirst;
          let userId= user.userId;
          let userNameLast=user.userNameLast;
          let userAge=user.userAge;
          let userAddress=user.userAddress;
          let userEmail=user.userEmail;
          let userGender=user.userGender;
          let userZip=user.userZip;

          sessionStorage.setItem('userName', userName);
          sessionStorage.setItem('userLast',userNameLast);
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('userEmail', userEmail);
          sessionStorage.setItem('userAddress', userAddress);
          sessionStorage.setItem('userAge',userAge);
          sessionStorage.setItem('userGender',userGender);
          sessionStorage.setItem('userZip',userZip);
          // this.router.navigate(['loginsuccess'])
        }
        else
        {
          alert(user.status)
          this.message=user.message
          this.router.navigate(['user'])
        }
      }
    )
  }



}
