import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  public soil = true;
  public mandi = false;
  constructor() { }

  ngOnInit(): void {
  }
  showSoil(){
    console.log(this.soil)
    if(this.soil){
      this.soil = false;
    }
    else{
      this.soil =true;
    }
    
  }
  showMandi(){
    if(this.mandi){
      this.mandi = false;
    }
    else{
      this.mandi =true;
    }
    

  }

}
