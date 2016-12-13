import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
    // NativeScriptRouterModule,
    // NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
