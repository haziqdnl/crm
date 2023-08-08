import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  public menuItems: any = [];
  constructor(public g: GeneralService) {}

  @Output() updateNavbarPageTitle: EventEmitter<string> = new EventEmitter();
  ngOnInit() {
    this.updateNavbarPageTitle.emit("Dashboard");
    this.g.mainLayoutMenu.forEach((data: any) => {
      if (data.title !== 'Dashboard')
        this.menuItems.push(data);
    });
  }
}
