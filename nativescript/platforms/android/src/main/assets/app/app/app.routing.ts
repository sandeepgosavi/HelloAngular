
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login.component";

export const routes = [
  { path: "", pathMatch: 'full', component: LoginComponent },
  { path: "t4c-root", component: AppComponent },
  { path: "t4c-login", component: LoginComponent },
  { path: "t4c-home", component: HomeComponent }
];

export const navigatableComponents: any = [
  AppComponent,
  HomeComponent,
  LoginComponent
];




// import { AppComponent } from "./app.component";
// import { HomeComponent } from "./home.component";

// export const routes = [
//   { path: "", component: AppComponent },
//   { path: "t4c-login", component: AppComponent },
//   { path: "t4c-home", component: HomeComponent }
// ];

// export const navigatableComponents: any = [
//   AppComponent,
//   HomeComponent
// ];