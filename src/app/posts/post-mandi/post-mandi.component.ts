import { MandiService } from './../../mandi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-mandi',
  templateUrl: './post-mandi.component.html',
  styleUrls: ['./post-mandi.component.scss']
})
export class PostMandiComponent implements OnInit {


  Mandi: any ;
  STATE: any
  DIST: any
  MARKET: any
  GODOWN:any
  COLDSTORAGE: any
  DISTANCE: any
  CROPS:any
  PHONE: any
  ADDRESS:any

  constructor(private mandiService : MandiService) { }

  ngOnInit(): void {
  }
  addhelplines(){

    const addMandi = {


      STATE: this.STATE ,
      DIST:this.DIST ,
      MARKET: this.MARKET ,
      GODOWN:this.GODOWN ,
      COLDSTORAGE: this.COLDSTORAGE,
      DISTANCE: this.DISTANCE ,
      CROPS:this.CROPS ,
      PHONE: this.PHONE,
      ADDRESS:this.ADDRESS,




       }
       this.mandiService.addMandi(addMandi)
       .subscribe(Mandi =>{
         this.mandiService.push(Mandi);
         this.mandiService.getmandiSchema()
         .subscribe(helplines =>
           this.Mandi=Mandi)
       })

     alert("Your details added Successfully")
     }
}

