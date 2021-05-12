import { HttpClient } from '@angular/common/http';
import { CropSchemaService } from './../../crop-schema.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  Question:any
  constructor(private cropSchemaService:CropSchemaService) { }

  ngOnInit(): void {
  }

  // input=document.getElementById('input')

  // button=document.getElementById('abc');
  //  paragraph=document.createElement("p");

  //  add()
  //  {
  //   this.paragraph.innerHTML=input.value;
  //   button.appendChild(this.paragraph);
  //   console.log(input.value);
  //   input.value="";
  //  }
  sendMessage(message_content:any){
    console.log(message_content.value)
    message_content.value="";
  }
  title = 'final';

  getCropSchema(){


    this.cropSchemaService.getCropSchema()
       .subscribe(res =>{

         this.Question = res
       },
       err=>{
         console.log(err) ;
       })

       console.log(this.Question)



     }


}
