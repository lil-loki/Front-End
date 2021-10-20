import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from './User';
import { Login } from './loginClass';
import { Loan } from './Loan';
import { Vehicle } from './Vehicle';
import { UserList } from './UserList';
import { RejectedUserList } from './RejectedUserList';
import { AppliedLoanList } from './AppliedLoanList';
import { ApprovedUserList } from './ApprovedUserList';
import { PendingUserList } from './PendingUserList';
import { Accounts } from './Accounts';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) {  }




    login(login:Login):Observable<any>
    {

        return this.http.post("http://localhost:3000/loginuser",login)

    }

     register(user:User):Observable<any>
      {

          return this.http.post("http://localhost:3000/register",user)

      }


      loginadmin(adminlogin:Login):Observable<any>
      {

          return this.http.post("http://localhost:3000/loginadmin",adminlogin)

      }

      registerloan(loan:Loan):Observable<any>
      {

        return this.http.post("http://localhost:3000/registerloan",loan)

      }

      registerVehicle(vehicle:Vehicle):Observable<any>
      {

          return this.http.post("http://localhost:3000/vehicleregister",vehicle)

      }

      registerAccount(accounts:Accounts):Observable<any>
      {

          return this.http.post("http://localhost:3000/registeraccount" ,accounts)

      }

      viewAll():Observable<UserList[]>
      {

          return this.http.get<UserList[]>("http://localhost:3000/viewallusers")

      }

      viewRejected():Observable<RejectedUserList[]>
      {

          return this.http.get<RejectedUserList[]>("http://localhost:3000/viewrejectedusers")

      }

      viewPending():Observable<PendingUserList[]>
      {

          return this.http.get<PendingUserList[]>("http://localhost:3000/viewpendingusers")

      }

      viewApproved():Observable<ApprovedUserList[]>
      {

          return this.http.get<ApprovedUserList[]>("http://localhost:3000/viewapprovedusers")

      }

      approveLoan(loanId: Loan):Observable<any>
      {

          return this.http.post("http://localhost:3000/approveloan", loanId)

      }

      rejectLoan(loanId: Loan):Observable<any>
      {

          return this.http.post("http://localhost:3000/rejectloan", loanId)

      }

      viewloanstatus(user_id: Loan):Observable<AppliedLoanList[]>
      {

          return this.http.get<AppliedLoanList[]>('http://localhost:3000/viewloanstatus/'+user_id)

      }



}
