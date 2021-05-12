import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  input=document.getElementById('input')

  button=document.getElementById('abc');
   paragraph=document.createElement("p");

  //  add()
  //  {
  //   this.paragraph.innerHTML=input.value;
  //   button.appendChild(this.paragraph);
  //   console.log(input.value);
  //   input.value="";
  //  }
  sendMessage(message_content:any){
    console.log(message_content.value)
  }
  title = 'final';

}
