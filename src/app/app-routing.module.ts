import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
