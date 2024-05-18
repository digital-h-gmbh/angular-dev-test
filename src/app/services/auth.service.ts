import { Injectable } from '@angular/core';
import { MaybeNull } from '../types/maybe-null';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'token';

  get authToken(): MaybeNull<string> {
    return localStorage.getItem(this.tokenKey);
  }
}
