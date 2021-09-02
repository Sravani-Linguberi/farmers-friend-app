import { HelplinesService } from '../../helplines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helplines',
  templateUrl: './helplines.component.html',
  styleUrls: ['./helplines.component.scss']
})
export class HelplinesComponent{


  helplines:any;
  config:any;
  public title:String = "HELPLINE NUMBERS" ;
  details :any

   data : any ;
  records: any[] = [] ;
  totalRecords : any ;
  page : number = 1 ;
  filterData:any[] =[];
  constructor(private helplineService : HelplinesService) {
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
  this.helplineService.gethelplineSchema().subscribe(
    (res) =>{

      this.records = res ;

    },
    // (err:any)=>{
    //   // console.log(err);
    // }

  )
}





}

