import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginValidGuard implements CanActivate {
  BD:any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.User()){
        return true ;
  }

    return false;
}
User():boolean{
  this.BD=JSON.stringify(localStorage.getItem("UserLogin"))
  var data= JSON.parse(this.BD)
  var User= JSON.parse(data)
  console.log(User)
  if(User.name == "" && User.password == ""){
    return false;
      
    }else{
    return true;
    }

}
  
}
