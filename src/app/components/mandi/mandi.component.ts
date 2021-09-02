import { MandiService } from '../../mandi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandi',
  templateUrl: './mandi.component.html',
  styleUrls: ['./mandi.component.scss']
})
export class MandiComponent {


  config:any;
   public title = "MANDI " ;
   data : any ;
  records: any[] = [] ;
  totalRecords : any ;
  page : number = 1 ;
  filterData:any[] =[];
  constructor(private mandiSchema : MandiService) {
  this.getDataFromAPI()

  this.config={
    itemsPerPage:18,
    currentPage:1,
    totalItems:this.records.length

  }
}

public pageChanged(event:any):void{
  this.config.currentPage=event;
}


public getDataFromAPI(){
  this.mandiSchema.getmandiSchema().subscribe(
    (res) =>{

      this.records = res ;

    },
    // (err:any)=>{
    //   // console.log(err);
    // }

  )
}

  // ngOnInit(): void {

  // }



}
