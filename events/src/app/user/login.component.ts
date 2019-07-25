import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mouseoverLogin
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

   login(formData) {
    this.authService.loginUser(formData.userName, formData.password);
    this.router.navigate(['/events']);
   }

   cancel(){
    this.router.navigate(['/events']);
   }
}
