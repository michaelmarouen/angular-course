import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdIsValidIdGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const id = Number(next.paramMap.get('id'));
    console.log(id);
    if(!isNaN(id) && id >0){
      return true;
    }else{
      this.router.navigateByUrl('/products')
      return false
    }
    
  }
  
}
