"use strict";
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var login_component_1 = require("./login.component");
exports.routes = [
    { path: "", pathMatch: 'full', component: login_component_1.LoginComponent },
    { path: "t4c-root", component: app_component_1.AppComponent },
    { path: "t4c-login", component: login_component_1.LoginComponent },
    { path: "t4c-home", component: home_component_1.HomeComponent }
];
exports.navigatableComponents = [
    app_component_1.AppComponent,
    home_component_1.HomeComponent,
    login_component_1.LoginComponent
];
//# sourceMappingURL=app.routing.js.map