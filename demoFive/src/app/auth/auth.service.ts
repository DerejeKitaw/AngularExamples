import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {

  constructor() { }

  login(user) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(result => console.log(result));
  }
  register(user) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  }
  recover(user) {
    return firebase.auth().sendPasswordResetEmail(user.email);

  }
}
