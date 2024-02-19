import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  }

  public error:any = null;

  constructor(private backendService: BackendService, private tokens: TokenService, private router:Router, private auth: AuthService){
  }

  ngOnInit(): void {    
  }

  submitLogin(){
    console.log(this.form);
    return this.backendService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any){
    console.log("token: ", data.access_token)
    this.tokens.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    
    this.router.navigateByUrl('/profile');
  }
  handleError(error:any){
    this.error = error.error.error;
  }
}
