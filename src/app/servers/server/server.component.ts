import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Server } from '../server.model';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server:Server;
  constructor(private serverService:ServerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    let id=+ this.route.snapshot.params['id'];
    this.serverService.getServer(id).subscribe((ser)=>{
      this.server = ser;
    })
    this.route.params.subscribe((params:Params)=>{
      this.serverService.getServer(+params['id']).subscribe((ser)=>{
        this.server = ser;
      });
    })
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
    
  }
}
