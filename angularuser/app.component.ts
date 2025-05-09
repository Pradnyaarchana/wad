import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentPage: string = 'login';

  registerData = {
    name: '',
    address: '',
    gender: '',
    email: '',
    password: ''
  };

  loginData = {
    email: '',
    password: ''
  };

  loggedInUser: any = null;
  isLoggedIn: boolean = false;

  showPage(page: string) {
    this.currentPage = page;
    if (page === 'profile') {
      this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    }
  }

  registerUser() {
    const userKey = this.registerData.email;
    localStorage.setItem(userKey, JSON.stringify(this.registerData));
    alert('Registered successfully!');
    this.registerData = {
      name: '',
      address: '',
      gender: '',
      email: '',
      password: ''
    };
    this.currentPage = 'login';
  }

  loginUser() {
    const stored = localStorage.getItem(this.loginData.email);
    if (!stored) {
      alert('User not found!');
      return;
    }

    const parsedUser = JSON.parse(stored);
    if (parsedUser.password === this.loginData.password) {
      this.loggedInUser = parsedUser;
      localStorage.setItem('loggedInUser', JSON.stringify(parsedUser));
      this.isLoggedIn = true;
      this.currentPage = 'profile';
    } else {
      alert('Invalid password!');
    }

    this.loginData = { email: '', password: '' };
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.isLoggedIn = false;
    this.loggedInUser = null;
    this.currentPage = 'login';
  }
}