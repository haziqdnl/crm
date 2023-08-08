import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiAuthService } from 'src/app/api/api-auth.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public sidebarExpanded: boolean = false;
  public pageTitle: string = "";
  constructor(
    private apiAuthService: ApiAuthService,
    private g: GeneralService,
    private cdRef: ChangeDetectorRef,
  ){} 

  public childEvent(componentReference: any) {
    componentReference.updateNavbarPageTitle.subscribe((title: string) => {
      this.pageTitle = title;
    });
  }

  ngOnInit() {
    this.validateToken();
  }
  
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  private validateToken() {
    this.apiAuthService.apiValidateToken(this.g.getUserToken()).subscribe(
      ok  => { console.log('User authorized') },
      err => { this.g.apiRespError('', 'crm') },
    );
  }
};