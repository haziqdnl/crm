import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sidebarExpanded: boolean = false;
  pageTitle: string = "";

  constructor(private cdRef: ChangeDetectorRef){} 
  
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  childEvent(componentReference: any) {
    componentReference.updateNavbarPageTitle.subscribe((title: string) => {
      this.pageTitle = title;
    });
  }
}