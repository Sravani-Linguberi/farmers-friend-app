import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import{admin} from '../../admin';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
userName:any
password:any
  constructor(private AdminService: AdminService) { }
  getadmin()
  {

  }

  ngOnInit(): void {
  }

}