import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public menuItems: any = [
    { link: '/',                title: 'Dashboard',       icon:'home'     },
    { link: '/administration',  title: 'Administration',  icon:'database' },
    { link: '/csr',             title: 'Service Report',  icon:'flag'     },
    { link: '/setting',         title: 'Settings',        icon:'gear'     },
  ];

  @Input() public isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
