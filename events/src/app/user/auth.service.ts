import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConsts } from '../shared/constants';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable( {providedIn: 'root'})
export class AuthService {

  currentUser: IUser;
  constructor(private http: HttpClient) { }

  loginUser( username: string, password: string) {

    let loginInfo = {username: username, password: password };
    let options  = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
   return this.http.post(AppConsts.remoteServiceBaseUrl +'/api/login', loginInfo, options)
    .pipe(tap((data)=>{
      this.currentUser= <IUser>data['user'];
    }))
    .pipe(catchError(err=>{
      return of (false);
    }))
    ;

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(formValues) {
      this.currentUser.firstName = formValues.firstName;
      this.currentUser.lastName = formValues.lastName;
      let options  = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return  this.http.put(AppConsts.remoteServiceBaseUrl+`/api/users/${this.currentUser.id}`,this.currentUser, options);
  }

  checkAuthenicationStatus(){
   return  this.http.get(AppConsts.remoteServiceBaseUrl+'/api/currentIdentity')
    .pipe(tap(data=>{
      if (data instanceof Object){
        this.currentUser = <IUser> data;
      }
    }));

  }

  logout(){
    this.currentUser= undefined;
    let options  = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
   return this.http.post(AppConsts.remoteServiceBaseUrl+'/api/logout',{}, options)

  }
}
