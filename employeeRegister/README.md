# EmployeeRegistor

### Install firebase , bootstrap and font awesome
package.json
```
    "angularfire2": "^5.0.0-rc.6",
    "firebase": "^4.10.1",
    "bootstrap": "^4.0.0",
    "font-awesome": "^4.7.0",
```

style.scss
```
@import "node_modules/bootstrap/scss/bootstrap";
```

### Install toaster
```
npm install ngx-toaster
imports: [
    ToastrModule.forRoot()
  ],
````
Add css for toastr

### Deploy to firebase
Step 1
```
ng build --prod
```
Step 2
```
install firebase
npm install -g firebase-tools
```
Step 3
```
firebase login
```
Step 4
```
firebase init
```
Step 5
```
firebase deploy
```


