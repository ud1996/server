import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './servers/server.service';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
  {path:'users',component:UsersComponent},
 // {path:'servers/:id',component:ServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
