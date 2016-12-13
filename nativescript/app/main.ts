// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { routes, navigatableComponents } from "./app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent],
  imports: [
     NativeScriptModule,
     NativeScriptRouterModule,
     NativeScriptRouterModule.forRoot(routes)
  ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);