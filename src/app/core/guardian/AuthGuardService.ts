import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
  })
export class AuthGuardService implements CanActivate {

  access: boolean;

    constructor(private router: Router,
                private angularFireAuth: AngularFireAuth ) {

                  angularFireAuth.idToken.subscribe(res => (this.access = res ? true : false ));
    }

    public canActivate(): boolean {
        return this.checkStatementAvailability();
      }

      public canLoad(): boolean {
        return this.checkStatementAvailability();
      }

      public canActivateChild(): boolean {
        return this.canActivate();
      }

      public checkStatementAvailability(): boolean {
        if (!this.access) { this.router.navigate(['login']); }
        return this.access;
      }

}
