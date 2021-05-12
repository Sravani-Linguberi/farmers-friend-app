import { Component, OnInit } from '@angular/core';
import { CropSchemaService } from '../crop-schema.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.scss']
})
export class CropComponent implements OnInit {
  show:boolean=true;
  details:any[]=[];
  config:any;
  id:number=1;
  public title = "TYPES OF CROPS" ;
  database : any[] = [];
   data : any ;
  records: any[] = [] ;
  totalRecords : any ;
  page : number = 1 ;
  filterData:any[] =[];
  constructor(private cropService : CropSchemaService , private _Activatedroute:ActivatedRoute) {
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
  this.cropService.getCropSchema().subscribe(
    (res) =>{
      this.database = res;
      this.id = +(this._Activatedroute.snapshot.paramMap.get("id")!);
      this.data = this.database[<number>(this.id)];

      this.records = res.type ;


    },
    (err:any)=>{
      console.log(err);
    }

  )
}

  ngOnInit(): void {

  }




loadData(val:string){
  this.show=false
  this.details = this.data.type.filter((d:any)=>d.crop==val)
  this.title=this.details[0].crop

}

}
