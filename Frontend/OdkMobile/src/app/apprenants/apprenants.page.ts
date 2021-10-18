import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.page.html',
  styleUrls: ['./apprenants.page.scss'],
})
export class ApprenantsPage implements OnInit {
  list:any;
  constructor(private apiservice:ApiServiceService) { }

  ngOnInit() {
    this.listApprenant();
  }
  listApprenant(){
  this.apiservice.foundList().subscribe((data:any)=>this.list=data);
  }
}
