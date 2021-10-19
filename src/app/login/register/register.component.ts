import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/Accounts';
import { User } from 'src/app/User';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserServiceService, private router:Router) { }

  userNameFirst:any;
  userNameLast:any;
  userNameMiddle:any;
  userAge:any;
  userGender:any;
  userAddress:any;
  userEmail: any;
  userPass: any;
  userZip: any;



  register()
  {



    var user=new User();
    user.userNameFirst=this.userNameFirst;
    user.userNameLast=this.userNameLast;
    user.userNameMiddle=this.userNameMiddle;
    user.userPass=this.userPass;
    user.userEmail=this.userEmail;
    user.userZip=this.userZip;
    user.userAge=this.userAge;
    user.userGender=this.userGender;
    user.userAddress=this.userAddress;
    user.userType="New";



    this.service.register(user).subscribe(
      user=>{
        if(user.status=='SUCCESS')
        {
          console.log(user)
          alert("New User Registered !!");
          this.router.navigate(['login'])
        }
        else
        {
          alert("User Already Exists !!");
        }
    }
    )

  }

  ngOnInit(): void {
  }

}
