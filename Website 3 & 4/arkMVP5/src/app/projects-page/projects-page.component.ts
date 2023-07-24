import { Component, OnInit } from '@angular/core';
import { Project, ProjectApi, LoopBackAuth, User, UserApi, ClientApi, Milestone, Client, MilestoneApi } from '../shared/sdk/index';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
   
    private project:Project = new Project();
    private user : User = new User();
    private milestone:Milestone = new Milestone();
    ProjectName;ProjectDesc;Address;City;Province;Country;PostalCode;Freq;TotalCost;Reminder1;Reminder2;Reminder3;Proposal;Contract: string = '';
    ProjectDue : Date ;
     projects:Project[];
      projectEdit:Project;
      milestoneArray:Milestone[];
      milestoneOfProjectById:Milestone[];
      milestonedesc : Array<String>  = ["Schematic Design","Design Development","Construction Documents","Bidding and Negotiation","Construction Administration"];
      Percent : Array<number> =[15,20,25,30,10];
      Amount: Array<number> =[0,0,0,0,0];
      Reminder: Array<any> = [];
      Deadline: Array<any> = [];
      Complete: Array<any> = [];
      Paid: Array<any> = [];
      _projectSavedObject:Project;
      totalPercent:number;
  constructor(private projectApi:ProjectApi, token:LoopBackAuth,private userApi:UserApi,private milestoneApi:MilestoneApi,private router:Router,private route:ActivatedRoute) {
    
    this.findProjects();
  
   }
   findProjects (){
   
    this.projectApi.find({
        include:[{
            relation:'client'
        },{
            relation:'milestone'
        }]
    }).subscribe((_projects)=>{
     this.projects = <Project[]>_projects;
   
     console.log(this.projects[1]);
   
    
    })
   }
  ngOnInit() {
   
  }
  
  hideProjectList:boolean=false;
  showEditForm:boolean = false;
  current_project:Project;
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
  editProject(project)
  {
        
       this.hideProjectList=true;
       this.showEditForm=true;
       this.current_project = project;
        console.log(this.current_project);
       
            this.projectEdit = <Project>project
            this.ProjectName = this.projectEdit.project_name;
            this.ProjectDesc = this.projectEdit.project_description;
            this.Address = this.projectEdit.project_address,
            this.City = this.projectEdit.city,
            this.Country = this.projectEdit.country,
            this.Province = this.projectEdit.province,
            this.Freq = this.projectEdit.invoice_frequency,
            this.PostalCode = this.projectEdit.postal_code,
            this.TotalCost = this.projectEdit.project_cost,
            this.ProjectDue = this.projectEdit.project_deadline,
            this.Reminder1 = this.projectEdit.reminder_1,
            this.Reminder2 = this.projectEdit.reminder_2,
            this.Reminder3 = this.projectEdit.reminder_3,
            this.Proposal = this.projectEdit.proposal_file,
            this.Contract = this.projectEdit.contract_file
       
        this.projectApi.getMilestone(this.projectEdit.id).subscribe((_milestone)=>{
          this.milestoneArray = <Milestone[]>_milestone;
          console.log(this.milestone);
          for(var i = 0;i<this.milestoneArray.length;i++)
          {
              this.milestonedesc[i]=this.milestoneArray[i].typeof_milestone,
              this.Percent[i]=this.milestoneArray[i].percentage,
              this.Amount[i]= parseInt(this.milestoneArray[i].priceof_milestone),
              this.Reminder[i]=this.milestoneArray[i].reminder,
              this.Deadline[i]=this.milestoneArray[i].deadline,
              this.Complete[i]=this.milestoneArray[i].completed,
              this.Paid[i]=this.milestoneArray[i].paid
              
        }
          
        })
  
  
  
  }
    addSave(){
        
        this.checkPercent();
        if(this.totalPercent != 100){
           alert("Total Percentage should be 100 ");
          }else{
            this.showEditForm=false;
            this.projectApi.updateAttributes(this.current_project.id,{
            client_id:this.current_project.client_id ,
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
        }
    ).subscribe((_projectSaved)=>{
          this._projectSavedObject = <Project> _projectSaved;
          console.log(this._projectSavedObject);  
          this.milestoneApi.find({
              where:{
                  project_id:this._projectSavedObject.id
              }
          }).subscribe((_milestoneOfProjectById)=>{
                    console.log(_milestoneOfProjectById);
                    this.milestoneOfProjectById = <Milestone[]> _milestoneOfProjectById;
                    
                   for(var i=0;i< this.milestoneOfProjectById.length;i++){
                        this.milestoneApi.updateAttributes(this.milestoneOfProjectById[i].id,{
                            typeof_milestone:  this.milestonedesc[i],
                            percentage : this.Percent[i],
                            priceof_milestone : this.Amount[i],
                           reminder : this.Reminder[i],
                            deadline : this.Deadline[i],
                           completed : this.Complete[i],
                            paid : this.Paid[i],
                            project_id: this.milestoneOfProjectById[i].project_id
                        }).subscribe((_milestoneUpdated)=>{
                                console.log(_milestoneUpdated);
                        })
                   }
                   alert("Project has been updated successfully !!");   
                   // this.router.navigateByUrl('/projectlistingpage/'+0);
                this.findProjects();
                this.hideProjectList = false;
          })
          
        })
        
    }
}
logout(){
    this.userApi.logout().subscribe((_logout)=>{
        
        console.log("Logout success");
        this.router.navigate(['/']);
    },(error)=>{
        console.log("Logout failed");
    })
}
delete(project_id){
    this.projectApi.deleteById(project_id).subscribe((_deleteProject)=>{
        console.log(_deleteProject);
        this.findProjects();
      
    })
}
cancel(){
    this.showEditForm = false;
    this.hideProjectList = false;
    this.findProjects();
    
}
}
