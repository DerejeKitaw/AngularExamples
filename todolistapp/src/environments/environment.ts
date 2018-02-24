// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyABrj9FVDg6qwWSWSrySku5GhQGtPKnwmYA',
    authDomain: 'todolistapp-f1c03.firebaseapp.com',
    databaseURL: 'https://todolistapp-f1c03.firebaseio.com',
    projectId: 'todolistapp-f1c03',
    storageBucket: 'todolistapp-f1c03.appspot.com',
    messagingSenderId: '1062157569815'
  }
};
