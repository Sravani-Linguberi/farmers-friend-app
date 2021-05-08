import { HelplinesService } from './../../helplines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-helplines',
  templateUrl: './post-helplines.component.html',
  styleUrls: ['./post-helplines.component.scss']
})
export class PostHelplinesComponent implements OnInit {

  helplines:any
  details : any
  title : any


  constructor(private helplineService : HelplinesService) { }

  ngOnInit(): void {
  }



   addhelplines(){

       const newhelplines = {

          details: this.details ,
           title: this.title,
          }
          this.helplineService.addhelplines(newhelplines)
          .subscribe(helplines =>{
            this.helplineService.push(helplines);
            this.helplineService.gethelplineSchema()
            .subscribe(helplines =>
              this.helplines=helplines)
          })

        alert("Your details added Successfully")
        }
}
