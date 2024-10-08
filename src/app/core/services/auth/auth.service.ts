import { Injectable } from '@angular/core';
import { Auth, authState, signOut, user, User,  } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth
  ) { }

  authenticate(): Observable<User | null> {
    return authState(this.auth);
  }

  getAuthUser(): Observable<User | null> {
    return user(this.auth);
  }
  
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
