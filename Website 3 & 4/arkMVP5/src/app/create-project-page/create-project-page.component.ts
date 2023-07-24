import { Component, OnInit } from '@angular/core';
import { Client, Project, ClientApi, ProjectApi, LoopBackAuth, Milestone, MilestoneApi } from '../shared/sdk/index';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Input } from '@angular/core/src/metadata/directives';
import { LoopBackFilter } from '../shared/sdk/models';
import { Router } from '@angular/router';
import {DatepickerOptions} from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['./create-project-page.component.css']
})
export class CreateProjectPageComponent implements OnInit {
 
  private client: Client = new Client();
  private project: Project = new Project();
  private milestone:Milestone = new Milestone();
  public clientarray:Client[];
  result:any;
  projectResult : Project[];
  projectCreatedResult : Project;
  CompanyId;TotalCost: number;
  
  options: DatepickerOptions = {
    minYear: 2000,
    maxYear: 2100,
    displayFormat: 'YYYY-MM-DD',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    
  };
  ProjectName;ProjectDesc;Address;City;Province;Country;PostalCode;Freq;Reminder1;Reminder2;Reminder3;Proposal;Contract : string ;
  ProjectDue: Date;
  
  milestonedesc : Array<String>  = ["Schematic Design","Design Development","Construction Documents","Bidding and Negotiation","Construction Administration"];
  Percent : Array<number> =[15,20,25,30,10];
  Amount: Array<number> =[0,0,0,0,0];
  Reminder: Array<Date> = [];
  Deadline: Array<Date> = [];
  Complete: Array<any> = [];
  Paid: Array<any> = [];
  totalPercent:number;
  
  constructor(private clientApi:ClientApi, private projectApi:ProjectApi, public auth:LoopBackAuth,private milestoneApi:MilestoneApi,private router:Router) { 
    this.clientApi.find({
      include:[
        {
          relation:'project'
        }
      ]
    }).subscribe((_client)=>{
     
      this.clientarray = <Client[]>_client;
      console.log(this.clientarray);
    })
   this.ProjectDue = new Date;
   this.Deadline = [new Date(),new Date(),new Date(),new Date(),new Date()];
   this.Reminder = [new Date(),new Date(),new Date(),new Date(),new Date()];
  }

  ngOnInit() {
    
  }
    
  changeAmount = function() {
    
    
          for(var i = 0;i<this.milestonedesc.length;i++){
           this.Amount[i]=(this.TotalCost*this.Percent[i])/100;
          };
        };
         
        checkPercent = function(){
          this.totalPercent = 0;
          for (var j = 0;j<this.Percent.length;j++){
            this.totalPercent  = this.totalPercent+parseInt(this.Percent[j]);
    
            console.log(this.Percent[j]);
          }
          console.log(this.totalPercent);
    
        }
addProject(){
  this.checkPercent();
  if(this.totalPercent != 100){
    alert("Total Percentage should be 100 ");
  }else if(!this.CompanyId){
    alert("Please select Client for the Project");
  }
  else{
  this.projectApi.find(
    {
      include:[
        {
          relation:'milestone'
        }
      ]
    }
  ).subscribe((_projectmilestone)=>{
      this.projectResult = <Project[]> _projectmilestone
    this.projectApi.create({
          client_id:this.CompanyId,
          project_name:this.ProjectName,
          project_description:this.ProjectDesc,
          project_cost:this.TotalCost,
          project_deadline:this.ProjectDue,
          invoice_frequency:this.Freq,
          project_address:this.Address,
          city:this.City,
          province:this.Province,
          country:this.Country,
          postal_code:this.PostalCode,
          reminder_1:this.Reminder1,
          reminder_2:this.Reminder2,
          reminder_3:this.Reminder3,
          proposal_file:this.Proposal,
          contract_file:this.Contract
    }).subscribe((_projectCreated)=>{
      console.log(_projectCreated);
     this.result =  _projectCreated;
     this.projectCreatedResult = <Project> this.result
      for(var i = 0;i<this.milestonedesc.length;i++){
            this.milestoneApi.create({
              typeof_milestone:this.milestonedesc[i],
              percentage:this.Percent[i],
              priceof_milestone:this.Amount[i],
              reminder:this.Reminder[i],
              deadline:this.Deadline[i],
              completed:this.Complete[i],
              project_id:this.projectCreatedResult.id,
              paid:this.Paid[i]
            }).subscribe((milestoneResult)=>{
              console.log("Milestone is created");
            })
          }
        
    })
    alert("New Project has been added successfully !!");
    this.router.navigate(['/projectlistingpage']);
  })

 
}
}
}
