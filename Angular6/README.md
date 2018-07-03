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
