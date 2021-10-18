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


}
