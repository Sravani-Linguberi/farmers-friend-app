import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-address',
  templateUrl: './post-address.component.html',
  styleUrls: ['./post-address.component.scss']
})
export class PostAddressComponent implements OnInit {

 
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
