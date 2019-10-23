import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServerService } from '../server.service';
import { Server } from '../server.model';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server:Server;
  serverName:string='';
  serverStatus:string='';
  allowEdit:boolean=false;
  isUpdated:boolean = false;
  id:number;
  constructor(private route:ActivatedRoute,private serverService:ServerService,private router:Router){}
  ngOnInit() {
    this.id =+ this.route.snapshot.params['id'];
    this.serverService.getServer(this.id).subscribe((serv)=>{
      this.serverName = serv.name;
      this.serverStatus = serv.status;
      this.id = serv.id;
    });
    this.route.params.subscribe((params:Params)=>{
      this.serverService.getServer(+params['id']).subscribe((ser)=>{
        this.server = ser;
        this.serverName = ser.name;
        this.serverStatus = ser.status;
        this.id = ser.id;
    })
  })

  let allowEdit = this.route.snapshot.queryParams['allowEdit'];
  this.allowEdit = allowEdit==='1'?true:false;
  this.route.queryParams.subscribe((params:Params)=>{
    this.allowEdit = allowEdit==='1'?true:false;
  })
  }
onUpdateServer(){
  this.serverService.updateServer(this.id,{name:this.serverName,status:this.serverStatus}).subscribe(()=>{
    this.router.navigate(['/servers']);
  })
}
}
