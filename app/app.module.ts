import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComComponent } from './my-com/my-com.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MyComComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
