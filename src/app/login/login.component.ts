import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';
import { Token } from '../core/models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loading = false;
  loginError = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.loginError = '';
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: (data) => {
        const token: Token = {
          expiration: data.expiration_time,
          value: data.token,
        };
        this.storageService.saveToken(token);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.loading = false;
        this.loginError = this.errorMessage;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  reloadPage(): void {
    this.router.navigate(['/']);
  }
}
