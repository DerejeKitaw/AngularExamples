import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { formModule } from './forms/form.module';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    formModule],
    // declarations: [
 
    //   MenuComponent,
    // ],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];
