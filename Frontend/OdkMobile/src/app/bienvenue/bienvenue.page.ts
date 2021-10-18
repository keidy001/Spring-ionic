import { JsonpClientBackend } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class BienvenuePage implements OnInit {

  myDate :String= new Date().toISOString();
userinfo: any ;
loginDate:string;
  constructor(private router:Router, private uerinfo:LoginPage) { }

  ngOnInit() {
    this.userinfo=JSON.parse( localStorage.getItem("userinfo"));
    this.loginDate= localStorage.getItem("loginDate");
  }



}
