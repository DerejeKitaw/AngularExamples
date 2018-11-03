### TODOS

```
Create Home component
  ng g c component/Home
Route all routes to Home - RouterModule.for([{path:'',component:''}])

Generate Projects module
  ng g m component/project
Generate Shared module
  ng g m component/Shared
  - import and export[CommonModule]
      -imports because we need to use `CommonModule` inside shared modules(commonModules contain directives like `ngif`......)
      -exports because needed to use in all modules import shared modules
  - export FormModules - we need it in all modules import shared modules
Generate IProject interface
ng generate cl component/project/iProject
Generate project `service`
ng g s component/project/project
  set where the service will be provided use @Injectable
  define Observable of iProjects for:
    getProjects() to get all projects
    getProject(id:number) to get single project
    saveProject(project:Project)
    createProject(project:Project, headers:HttpHeader): Observable<Project>
    updateProject(project: Project, headers: HttpHeaders): Observable<Project>
    deleteProject(id:number)
    handle errors

Generate listProject Component
  ng g c component/project/list-project
Generate editProject Component
  ng g c component/project/edit-project
Generate detailProject Component
  ng g c component/project/detail-project
```
`
ng g c component/Home
ng g m component/project
ng g m component/Shared
ng generate cl component/project/iProject
ng g s component/project/project
ng g c component/project/list-project
ng g c component/project/edit-project
ng g c component/project/detail-project
