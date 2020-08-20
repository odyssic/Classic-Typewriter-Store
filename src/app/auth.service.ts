import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
// import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap((user) => this.userService.get(user.uid));
  }
}
