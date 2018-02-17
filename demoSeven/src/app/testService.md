### Generate TestServiceService
```
import { Injectable } from '@angular/core';
@Injectable()
export class TestServiceService {
  constructor() { }
}
```

### Provide TestServiceService in app.module.ts
```
providers: [TestServiceService],
```

### import TestServiceService in app component
```
import { AlertService } from './test.service';
```
### inject AlertService to app component constructor
```
constructor (testServer: AlertService){}
```


