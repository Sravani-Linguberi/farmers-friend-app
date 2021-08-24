import { MandiService } from '../../mandi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandi',
  templateUrl: './mandi.component.html',
  styleUrls: ['./mandi.component.scss']
})
export class MandiComponent implements OnInit {


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
      // this.records = this.data.records ;
      // this.totalRecords = res.length  ;
      // this.filterData = this.records.filter(el=>el.state == "Gujarat")


    },
    (err:any)=>{
      console.log(err);
    }

  )
}

  ngOnInit(): void {

  }


//   sortData(){
//     var value = document.getElementById("sortBy") as HTMLSelectElement ;
//     var query = "Gujarat"
//     query = value.value ;
//     //var value = "bihar";
//       this.filterData = this.records.filter(el=>el.state == query)
//       console.log(this.filterData)
//   //   this.InfoService.getData(query).subscribe(
//   //   (res) =>{

//   //     this.data = res ;
//   //     console.log(this.data)
//   //   },
//   //   (err)=>{
//   //     console.log(err);
//   //   }
//   // )
// }


}
