import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiAuthService } from 'src/app/api/api-auth.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  currentYear = new Date().getFullYear();
  constructor(
    public router: Router,
    private apiAuthService: ApiAuthService,
    private g: GeneralService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.isTokenExistOrValid();
  }

  /**
   *  Method: Auto login if a JWT token in the local storage login still valid
   */
  private isTokenExistOrValid() {
    if (this.g.getUserToken() != "") {
      this.apiAuthService.apiGetAllUser(this.g.getUserToken()).subscribe(
        ok => { 
          if (ok.code == "200")
            this.router.navigate(['']);
        },
        err => {
          console.log(err.error);
          console.log(err.error.message);
        },
      );
    }
  }
  
  /**
   *  Method: Form builder and control
   */
  public loginForm: FormGroup = this.fb.group({
    id:       ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  public loginFormSubmitted = false;
  get loginFormControl() { return this.loginForm.controls; }

  /**
   *  Method: Submit login form
   */
  public isIdPasswordValid: boolean = false;
  public submitLogin() {
    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      let request = {
        email: this.loginForm.value.id,
        password: this.loginForm.value.password
      }
      this.apiAuthService.apiLoginStaff(request).subscribe(
        ok => { 
          if (ok.code == "200") {
            this.g.setUserToken(ok.extended_token);
            this.router.navigate(['']);
          }
        },
        err => {
          this.toastr.error(err.error.message);
          this.isIdPasswordValid = false;
        },
      );
    }
  }
}