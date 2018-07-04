import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'TesteServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onUpdateServerName(event: Event) {
    console.log();
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getData() {
    return this.serverName;
  }
}
