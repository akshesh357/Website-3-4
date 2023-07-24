import { Component, OnInit } from '@angular/core';
import { Client, ErrorHandler, LoopBackConfig, AccessToken, LoopBackAuth, User, UserApi, InternalStorage } from '../shared/sdk/index';
import {ClientApi} from '../shared/sdk/services/custom/Client'
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  //email:string = "ladi@arkilio.com";


    email:any='';
    password:any='';
    accesstoken:any = {};
    tokenData : any = '';
  private client:Client = new Client();
  private user:User = new User();
  constructor(private clientApi:ClientApi,public auth:LoopBackAuth,private userApi:UserApi, private router :Router) {

  
  }


 clientLogin() : any
  {

         this.clientApi.login({"email":this.email,"password":this.password}).subscribe((result:AccessToken)=>{
          console.log(result);
          this.accesstoken = result;

          this.router.navigate(['/projectlistingpage']);
          return true;
        },(error)=> {
          alert("Username or password is incorrect !!");
           return false;
         });

}


}
