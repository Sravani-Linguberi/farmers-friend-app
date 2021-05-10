import { ContactUsService } from './../../contact-us.service';
import { EnquiryService } from './../../enquiry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {


enquiryQuestion: any

  enquiry:any
  Title: any
  Question: any
  Answer: any

  constructor(private enquiryService : EnquiryService  , private contactUsService : ContactUsService) { }

  ngOnInit(): void {

    this.getenquiry()
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
       alert("Your details added Successfully")


     }


  addenquiry(){

    const addEnquiry = {


      Title: this.enquiryQuestion.Topic ,
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

     alert("Your details added Successfully")
     }
}

