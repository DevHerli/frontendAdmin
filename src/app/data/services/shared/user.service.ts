import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = 'dhernandezd';
  private userRole: string = 'Administrador';

  getUsername(): string {
    return this.username;
  }
  
  setUser(username: string, role: string): void {
    this.username = username;
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }

  constructor() { }
}
