import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  /**
   *  Method: Configure API connectivity
   */
  public apiBaseUrl: string = "https://jayasatria.com/crm/app/api";
  //public apiBaseUrl: string = "http://127.0.0.1:8000/api";

  /**
   *  Method: User Token
   */
  private userToken = 'jsmsoftware_usertoken';
  public setUserToken(t: any) {
    localStorage.setItem(this.userToken, t);
  }
  public getUserToken() {
    return localStorage.getItem(this.userToken);
  }

  /**
   *  Method: Error Handling
   */
  apiRespError(errData: any, moduleName: string) {
    if (errData.code !== '401') {
      this.toastr.error(errData.message);
    }
    else this.router.navigate(['error/401'], { queryParams: { m: moduleName } });
  }

  /**
   *  Method: End User Session / Reset User Token
   */
  public endUserSession() {
    this.setUserToken("");
    this.router.navigate(['/login']);
  }

  /**
   *  Method: End User Session / Reset User Token
   */
  public endCustomerSession() {
    //this.setUserToken("");
    //this.router.navigate(['/login']);
  }

  /**
   *  Method: To set input type text as numeric only
   */
  public numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return charCode > 31 && (charCode < 48 || charCode > 57) ? false : true;
  }

  /**
   *  Method: Match two passwords
   */
  public matchPasswords(pwd1: string, pwd2: string) {
    return (formGroup: FormGroup) => {
      const pwdCtrl1 = formGroup.controls[pwd1];
      const pwdCtrl2 = formGroup.controls[pwd2];

      if (!pwdCtrl1 || !pwdCtrl2)
        null;

      if (pwdCtrl2.errors && !pwdCtrl2.errors['passwordMismatch'])
        null;

      pwdCtrl1.value !== pwdCtrl2.value ? pwdCtrl2.setErrors({ passwordMismatch: true }) : pwdCtrl2.setErrors(null);
    }
  }

  /**
   *  Method: Get current Date (no time)
   */
  public getCurrentDateOnly() {
    let todayDateTime = new Date();
    let year = todayDateTime.getFullYear();
    let month = (todayDateTime.getMonth() + 1).toString().length == 1 ? '0' + (todayDateTime.getMonth() + 1) : todayDateTime.getMonth() + 1;
    let day = todayDateTime.getDate().toString().length == 1 ? '0' + todayDateTime.getDate() : todayDateTime.getDate();
    
    return new Date(year + '-' + month + '-' + day);
  }

  /**
   *  Method: Main layout menu
   */
  public mainLayoutMenu: any = [
    { link: '/',                title: 'Dashboard',       icon:'home'     },
    { link: '/profiling',       title: 'Profiling',       icon:'database' },
    { link: '/csr',             title: 'Service Report',  icon:'flag'     },
    { link: '/setting',         title: 'Settings',        icon:'gear'     },
  ];
}