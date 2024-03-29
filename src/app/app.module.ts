import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
  apiKey: "AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw",
  authDomain: "stackblitzfire.firebaseapp.com",
  databaseURL: "https://stackblitzfire.firebaseio.com",
  storageBucket: "stackblitzfire.appspot.com",
  messagingSenderId: "42917465053"
};

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp(config),
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
