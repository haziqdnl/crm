import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  /**
   *  Method: Configure API connectivity
   */
  public apiBaseUrl: string = "https://jayasatria.com/crm/app/api";

  /**
   *  Method: User Token
   */
  public userToken = 'jwtToken';
  setUserToken(t: any) {
    localStorage.setItem(this.userToken, t);
  }
  getUserToken() {
    return localStorage.getItem(this.userToken);
  }

  /**
   *  Method: Error Handling
   */
  // apiRespError(rsp: any, moduleName: string) {
  //   if (rsp.RespCode != '401') {
  //     const modalRef = this.modalService.open(ErrorModalComponent, { centered: true });
  //     modalRef.componentInstance.item = rsp;
  //   }
  //   else this.router.navigate(['error/401'], { queryParams: { m: moduleName } });
  // }

  /**
   *  Method: End Session / Reset Token
   */
  endSession(module: any) {
    this.setUserToken("");
    this.router.navigate([module + '/login']);
  }

  /**
   *  Method: To set input type text as numeric only
   */
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return charCode > 31 && (charCode < 48 || charCode > 57) ? false : true;
  }

  /**
   *  Method: Match two passwords
   */
  matchPasswords(pwd1: string, pwd2: string) {
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
  getCurrentDateOnly() {
    let todayDateTime = new Date();
    let year = todayDateTime.getFullYear();
    let month = (todayDateTime.getMonth() + 1).toString().length == 1 ? '0' + (todayDateTime.getMonth() + 1) : todayDateTime.getMonth() + 1;
    let day = todayDateTime.getDate().toString().length == 1 ? '0' + todayDateTime.getDate() : todayDateTime.getDate();
    
    return new Date(year + '-' + month + '-' + day);
  }

  /**
   *  Method: Get user current location
   */
  apiGeolocation(lt: any, ln: any): Observable<any> {
    let location = ln + ',' + lt;
    return this.http.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&featureTypes=&location=${location}`)
      .pipe( catchError( err => { throw err } )
    )
  }
}