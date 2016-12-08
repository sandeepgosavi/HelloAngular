# HelloAngular

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

This is a very simple Hello Angular app. Let’s start with it.
1.	Install prerequisite from `http://docs.nativescript.org/angular/start/quick-setup`
2.	Open command prompt and navigate to the folder where you want to create project
3.	Create angular 2 web app and navigate to it
`
> ng new HelloAngular
> cd HelloAngular
`
4.	Open the project in Visual studio code
5.	Run the project `HelloAngular > ng serve`
6.	Open browser and open URL `http://localhost:4200/`
7.	Now we have web app and the next step is to add mobile app in this project. For this we have to add a component created by [Nathan Walker](https://github.com/NathanWalker).
8.	To add the component, execute the following command `HelloAngular > npm i nativescript-ng2-magic`
9.	Now we are ready to reuse the code for mobile app.
10.	We have to use the `nativescript-ng2-magic` component instead of `@angular/core`. The reason to do this, magic component will detect the platform and according to platform will open html. If the platform is mobile, then it will render the tns.html file and if the platform is web then it will render the .html file
11.	Open visual studio code, expand the folder src -> app and select the file `app.component.ts`
12.	Make changes as
        Before
            `import { Component } from '@angular/core';`
        After
	        `import { Component } from 'nativescript-ng2-magic';`
13.	Make templateUrls and styleUrls as absolute if they are relative
14.	Now add the html file as `app.component.tns.html` in src -> app folder
15.	Install extension `NativeScript + Angular 2 Snippets` by Nathan Walker. It is just to create native script views little fast. After all it is your choice to install or not.
16.	Add the following code in app.component.tns.html page
`
    <ActionBar title="Angular CLI magic" icon="">
    </ActionBar>
    <StackLayout>
        <Label [text]="title" textWrap="true"></Label>
    </StackLayout>
`
17.	Src folder and nativescript folder has symbolic link. Because of this you can see all the things from src folder into the nativescript folder. You can make changes in any of the folder
18.	Add the css file in src -> app folder as `app.component.tns.css`
19.	Run the project on android emulator

`HelloAngular > npm run start.livesync.android`
		OR
`HelloAngular > npm run start.run.android`

And for iOS emulator

`HelloAngular > npm run start.livesync.ios`
		OR
`HelloAngular > npm run start.run.ios`

20.	Now run the web app as

`HelloAngular > ng serve`

21.	Here we get a code reusability for both web app and mobile app.


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md) and [Nathan Walker's blog](https://github.com/NathanWalker/nativescript-ng2-magic)
