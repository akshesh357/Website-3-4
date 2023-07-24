import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateCompanyPageComponent } from './create-company-page/create-company-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginPageComponent},
  {path:'projectlistingpage' ,component:ProjectsPageComponent},
  {path:'projectlistingpage/0' ,component:ProjectsPageComponent},
  {path:'company',component:CreateCompanyPageComponent},
  {path:'project',component:CreateProjectPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  CONST_ROUTING = RouterModule.forRoot(routes);
 }
