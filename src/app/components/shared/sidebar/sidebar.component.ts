import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public g: GeneralService) {}

  @Input() public isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  public handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
