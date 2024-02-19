import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  constructor(private backendService: BackendService) {
  }
  public error:any =[];

  ngOnInit(): void {
  }

  submitRegistration() {
    console.log(this.form);
    return this.backendService.signup(this.form).subscribe(
      data => {
        console.log(data);
      },
      error => this.handleError(error)
    )
  }

  handleError(error:any){
    this.error = error.error.errors;
  }
}
