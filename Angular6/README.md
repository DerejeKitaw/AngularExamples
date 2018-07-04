```ts
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
```

```html
<app-servers></app-servers>
```

```ts
import { Component, OnInit } from '@angular/core';
@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
```
```html
<div class="app-servers"></div>
```

```ts
import { Component, OnInit } from '@angular/core';
@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
```
```html
<div class="app-servers"></div>
```
### Data binding
> Data binding is communication between typescript code to template.

> From typescript code to html
1. string interpolation
    ```ts
    {{data}}
    // Can also call a method
    {{getData()}}
    ```
2. Property binding
    ```ts
    [property] = "data" // Where property is the property of html
    Eg. Button have 'disable' property and to change its value dynamically use property binding

    ```
    Eg.
    ```html
    <button class="btn btn-primary" [disabled]="allowNewServer">Add Server</button>
    ```
    Eg.
    ```html
    <p  [innerText]="allowNewServer"></p>
    ```
> From html to typescript
1. Event binding
    ```ts
    (event) = "expression"
    ```
      Eg.
    ```html
    <button class="btn btn-primary" (click)="onCreateServer()">Add Server</button> <!-- When clicked onCreateServer() will run-->
    ```
> Two way from html to TS or typescript to html
    ```ts
    [(ngModel)] = "data"
    ```
    Eg.
    ```html
  <input type="text" class="form-control" [(ngModel)]="allowServer">
    ```
    OR
    ```html
    <input type="text" (input)="rturnUserName($event)">
<p>{{username1}}</p>
   ```
   ```ts
 rturnUserName(event: Event) {
    this.username1 = (<HTMLInputElement>event.target).value;
  }
   ```
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'TesteServer';
  constructor() { }

  ngOnInit() {
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
```
```html
<input type="text" class="form-control"  (input)="onUpdateServerName($event)" >
<div>{{serverName}}</div>
```