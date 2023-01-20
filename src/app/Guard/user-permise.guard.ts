import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../servicios/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserPermiseGuard implements CanActivate {
  BD:any
constructor(public data:DataService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.UserMaster()){
          return true ;
    }

      return false;
  }
  UserMaster():boolean{
    this.BD=JSON.stringify(localStorage.getItem("UserLogin"))
    var data= JSON.parse(this.BD)
    var User= JSON.parse(data)
    console.log(User)
    if(User.name == "master" && User.password == "12345678"){
      return true;
      }else{
      return false;
      }
  
  }
}
