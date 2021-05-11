import { soilSchema } from './../../soilSchema';
import { SoilSchemaService } from './../../soil-schema.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-soil',
  templateUrl: './post-soil.component.html',
  styleUrls: ['./post-soil.component.scss']
})
export class PostSoilComponent implements OnInit {

  SoilSchema:any
  STATE:any
  dist:any
  Email:any
  Fax:any
  No_of_Staff:any
  Office_Address_Line1:any
  Office_Name:any
  TelePhone:any
  Soil_Equipment:any
  Soil_Test_No:any
  Other_Information:any




  constructor(private soilService : SoilSchemaService) { }

  ngOnInit(): void {
  }


  addgetsoilSchema(){

    const newsoilSchema = {
         STATE:this.STATE,
        dist:this.dist,
        Email:this.Email,
        Fax:this.Fax,
        No_of_Staff:this.No_of_Staff,
        Office_Address_Line1:this.Office_Address_Line1,
        Office_Name:this.Office_Name,
        TelePhone:this.TelePhone,
        Soil_Equipment:this.Soil_Equipment,
        Soil_Test_No:this.Soil_Test_No,
        Other_Information:this.Other_Information


    }

       this.soilService.addgetsoilSchema(newsoilSchema)
       .subscribe(soilSchema =>{
         this.soilService.push(soilSchema);
         this.soilService.getsoilSchema()
         .subscribe(soilSchema =>
           this.SoilSchema=soilSchema)
       })

     alert("Your details added Successfully")
     }
}

