import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AdminAuthGuardService implements CanActivate {
  constructor(private auth: AuthService, public userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.map((appUser) => appUser.isAdmin);
  }
}
