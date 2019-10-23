import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, observable } from 'rxjs';
import { Server } from './server.model';

@Injectable({
    providedIn:'root'
})
export class ServerService{

    configURL:string = 'assets/data.json';
    constructor(private http:HttpClient){

    }

    getServers():Observable<any>{

        return this.http.get(this.configURL);
    }

    getServer(id:number):Observable<Server>{
        return Observable.create((observer:Observer<Server>)=>{
            this.getServers().subscribe((servers:Server[])=>{
                const server = servers.find((server)=>{
                    return server.id === id;
                });
                observer.next(server);
            })
        })
    }

    updateServer(id:number,serverInfo:{name:string,status:string}):Observable<any>{
        let  observable:Observable<any>;
        this.getServer(id).subscribe((server)=>{
            server.name = serverInfo.name;
            server.status = serverInfo.status;
            this.http.put(this.configURL,server);
        })
        return observable;
    }
}



//get-select
//to  specify 1 service in other service ...use injectable decorator