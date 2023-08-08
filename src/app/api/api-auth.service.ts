import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { GeneralService } from '../services/general/general.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  controllerName: string = 'auth';
  constructor(public http: HttpClient, private g: GeneralService) {}

  apiValidateToken(token: any): Observable<any> {
    var headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.post(`${this.g.apiBaseUrl}/${this.controllerName}/user/validate/token`, { headers: headers })
      .pipe( catchError( (err) => { throw err; } ) )
  }

  apiGetAllUser(token: any): Observable<any> {
    return this.http.get(`${this.g.apiBaseUrl}/${this.controllerName}/user`, { 'headers': { 'content-type': 'application/json', 'Authorization': 'Bearer ' + token } })
      .pipe( catchError( err => { throw err; } ) )
  }
    
  apiLoginStaff(body: any): Observable<any> {
    return this.http.post(`${this.g.apiBaseUrl}/${this.controllerName}/login/staff`, body, { 'headers': { 'content-type': 'application/json' } })
      .pipe( catchError( (err) => { throw err; } ) )
  }

  apiGetProfileInfo(body: any, token: any): Observable<any> {
    return this.http.post(`${this.g.apiBaseUrl}/${this.controllerName}/login/staff`, body, { 'headers': { 'content-type': 'application/json', 'Authorization': 'Bearer ' + token } })
      .pipe( catchError( (err) => { throw err; } ) )
  }
}