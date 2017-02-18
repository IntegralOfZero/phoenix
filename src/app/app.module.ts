import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';

let routes: Routes = [
  {
    path: "",
    component: AppComponent
  }
/*  {
    path: "**" // ,
    // component: PageNotFoundComponent
  }*/
]

@NgModule({
  imports:      [
    BrowserModule
   // RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
