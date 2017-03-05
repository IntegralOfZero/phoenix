import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
 
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
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
   // RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
