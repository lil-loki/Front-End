import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private service: UserServiceService, private router: Router) { }

  userNameFirst: any;
  userNameLast: any;
  userNameMiddle: any;
  userAge: any;
  userGender: any;
  userAddress: any;
  userEmail: any;
  userPass: any;
  userZip: any;



  register() {



    var user = new User();
    user.userNameFirst = this.userNameFirst;
    user.userNameLast = this.userNameLast;
    user.userNameMiddle = this.userNameMiddle;
    user.userPass = this.userPass;
    user.userEmail = this.userEmail;
    user.userZip = this.userZip;
    user.userAge = this.userAge;
    user.userGender = this.userGender;
    user.userAddress = this.userAddress;
    user.userType = "New";



    this.service.register(user).subscribe(
      user => {
        if (user.status == 'SUCCESS') {
          console.log(user)
          alert("New User Registered !!");
          this.router.navigate(['UserLogin'])
        }
        else {
          alert("User Already Exists !!");
        }
      }
    )

  }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "emailId": new FormControl(null, [Validators.required, Validators.email]),
      "Password": new FormControl(null, [Validators.required]),
      "Zip": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "middleName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Age": new FormControl(null, [Validators.required])

    });
  }

  get firstname() { return this.registerForm.get('firstName'); }
  get lastname() { return this.registerForm.get('lastName'); }
  get middlename() { return this.registerForm.get('middleName'); }
  get emailid() { return this.registerForm.get('emailId'); }
  get password() { return this.registerForm.get('Password'); }
  get age() { return this.registerForm.get('Age'); }
  get zip() { return this.registerForm.get('Zip'); }








}

