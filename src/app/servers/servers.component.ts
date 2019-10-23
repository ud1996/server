import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers:Server[];
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.serverService.getServers().subscribe((data:Server[])=>{
      this.servers =[...data];
    })
  }

}
