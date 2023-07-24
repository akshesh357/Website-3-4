import { Component, OnInit } from '@angular/core';
import { Client, ClientApi } from '../shared/sdk/index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-company-page',
  templateUrl: './create-company-page.component.html',
  styleUrls: ['./create-company-page.component.css']
})
export class CreateCompanyPageComponent implements OnInit {

  private client:Client = new Client();
  CompanyName;Address;City;Province;Country;PostalCode;Email;ApproverName;ApproverEmail: string ;
  WorkNumber;MobileNumber : number;
  constructor( private clientApi:ClientApi,public router:Router) { }

  ngOnInit() {
  }
  addClient(){
      this.clientApi.create({
        client_name:this.CompanyName,
        address:this.Address,
        city:this.City,
        province:this.Province,
        country:this.Country,
        postal_code:this.PostalCode,
        email:this.Email,
        work_number:this.WorkNumber,
        mobile_number:this.MobileNumber,
        approver_name:this.ApproverName,
        approver_email:this.ApproverEmail,
        username:this.Email,
        password:this.Email}).subscribe(()=>{
            console.log("created");
            alert("New Company has been created successfully !!");
        })
  }
  
}
