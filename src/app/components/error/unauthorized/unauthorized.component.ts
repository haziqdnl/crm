import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

  public currentYear = new Date().getFullYear();
  constructor(
    private g: GeneralService,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUrlParam();
  }

  urlParam: any;
  private getUrlParam() {
    this.routeParam.queryParamMap.subscribe( paramMap => { this.urlParam = paramMap.get('m'); });
  }

  public toLogin () {
    if (this.urlParam == 'customer')
      this.g.endCustomerSession()
    else
      this.g.endUserSession();
  }
}