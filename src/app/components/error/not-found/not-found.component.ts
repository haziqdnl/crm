import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public currentYear = new Date().getFullYear();
  constructor(private location: Location) {}

  public goBack() { this.location.back(); }
}