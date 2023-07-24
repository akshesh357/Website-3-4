import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule  } from '@angular/router';
import { ProjectApi, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, ClientApi, ErrorHandler, Client, LoggerService, RealTime, UserApi } from '../shared/sdk/index';
import { HttpModule } from '@angular/http';
import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, HttpModule, RouterModule, RouterTestingModule],
      declarations: [ LoginPageComponent ],
      providers:[ProjectApi,SocketConnection,SocketDriver,SDKModels,LoopBackAuth,InternalStorage,JSONSearchParams,ClientApi,ErrorHandler,LoggerService,RealTime,UserApi]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('login sucess', () => {
    var retValue = true;
    component.email="ladi@arkilio.com";
  component.password="arkilio1";
    retValue = component.clientLogin();

expect(retValue).toEqual(true);
});
//
//   it ('login fails', () =>{
//     var retValue = true;
//     component.email="laid1@arkilo.com";
//   component.password="arklio1";
//  retValue = component.clientLogin();
// expect(retValue).toEqual(false);
//   })
});
