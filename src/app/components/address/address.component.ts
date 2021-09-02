import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
   public soil:boolean = true;
  public mandi:boolean = false;
  // constructor() {}

  // ngOnInit(): void {
  // }
  showSoil() {
    if (this.soil) {
      this.soil = false;
    } else {
      this.soil = true;
    }
  }
  showMandi() {
    if (this.mandi) {
      this.mandi = false;
    } else {
      this.mandi = true;
    }
  }
}
