import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { UpMenuComponent } from './up-menu/up-menu.component';
import { DownMenuComponent } from './down-menu/down-menu.component';
import { HomeComponent } from './home/home.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { DownMenuUnloggedComponent } from './down-menu-unlogged/down-menu-unlogged.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    ContactComponent,
    UpMenuComponent,
    DownMenuComponent,
    HomeComponent,
    StartMenuComponent,
    DownMenuUnloggedComponent,
    GameInfoComponent,
    SearchMenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }