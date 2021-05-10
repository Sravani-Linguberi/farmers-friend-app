import { ContactUsService } from './../../contact-us.service';
import { Component, OnInit } from '@angular/core';
// import "../../../assets/images/contact.jpeg"

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactus:any
  Fullname: any
  Topic:any
  Details: any




  constructor(private contactUsService: ContactUsService) { }



  ngOnInit(): void {
  }


  addcontacUs(){
  const contactus = {


    Fullname:this.Fullname ,
    Topic:this.Topic ,
    Details: this.Details ,
  }
     this.contactUsService.addcontacUs(contactus)
     .subscribe(contactus =>{
       this.contactUsService.push(contactus);
       this.contactUsService.getcontactUs()
       .subscribe(contactus =>
         this.contactus=contactus)
     })

   alert("Your details added Successfully")
   }
}
