import { ContactUsService } from './../../contact-us.service';
import { EnquiryService } from './../../enquiry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  Crop:any[]=[];


enquiryQuestion: any

  enquiry:any
  Title: any
  Question: any
  Answer: any
  config:any;
  constructor(private enquiryService : EnquiryService  , private contactUsService : ContactUsService) {
    
   }
  

  ngOnInit(): void {

    this.getenquiry()
    //this.sortData()
   
  }
  

  getenquiry(){


    this.contactUsService.getcontactUs()
       .subscribe(res =>{

         this.enquiryQuestion = res
       },
       err=>{
         console.log(err) ;
       })

       console.log(this.enquiryQuestion)
      


     }

    //  sortData(){
    //    this.Crop = this.enquiryQuestion.filter( (el:any)=>{ el.Topic === "Mandi"
    //   console.log(el)})
    //    console.log(this.Crop)

    //  }


  addenquiry(){

    const addEnquiry = {


      Title: this.enquiryQuestion[0].Topic ,
      Question:this.Question ,
      Answer: this.Answer
     }
       this.enquiryService.addEnquiry(addEnquiry)
       .subscribe(Mandi =>{
         this.enquiryService.push(Mandi);
         this.enquiryService.getenquiry()
         .subscribe(enquiry =>
           this.enquiry=enquiry)
       })

     
     }
     
     
}

