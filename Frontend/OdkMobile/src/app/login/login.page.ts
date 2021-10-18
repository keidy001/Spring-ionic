import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any;
  password:any;
  userinfo:any;
  loginDate: String;

  
 
  constructor(
    private apiservice:ApiServiceService,
    private router:Router,
    private toastCtrl:ToastController
   

    ) { }

  ngOnInit() {
  }

  public image ={
    odk:"assets/image/odk.jpeg"
  }

  async processLogin(){
    if (this.login!="" && this.password!="") {
      this.apiservice.lolginCheck(this.login, this.password).subscribe(async(data:any)=>{
        if (data!=null) {
          this.userinfo=data;
          
          localStorage.setItem("userinfo", JSON.stringify(this.userinfo) );
         
          
          this.router.navigate(['/bienvenue'])
          const toast = await this.toastCtrl.create({
            message : 'Connecter avecc succes',
            duration : 2000

        });
        toast.present();
        }
        else{
          const toast = await this.toastCtrl.create({
            message : 'Ooups! Login ou mot de passe incorrect',
            duration : 2000,
            

        });
        toast.present();

        }
        



      }
      )
      
      
    }
    else{
      const toast = await this.toastCtrl.create({
        message : 'Login ou password non renseigner',
        duration : 2000

    });
    toast.present();
    }


  }
}
