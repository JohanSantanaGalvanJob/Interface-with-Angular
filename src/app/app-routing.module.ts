import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signIn',component: SignInComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'startMenu', component: StartMenuComponent},
  {path: 'searchMenu', component: SearchMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }