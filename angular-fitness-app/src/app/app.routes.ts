import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { UsersComponent } from './auth/users/users.component';
import { EditUserComponent } from './auth/users/edit-user/edit-user.component';
import { PaigeNotFoundComponent } from './paige-not-found/paige-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Welcome', component: WelcomeComponent },
  { path: 'training', title: 'Training', component: TrainingComponent },
  { path: 'log-in', title: 'Log In', component: LogInComponent },
  { path: 'sign-up', title: 'Sign Up', component: SignUpComponent },
  { path: 'users', title: 'Users', component: UsersComponent }, //admin
  { path: 'edit user/:id', title: 'Edit users', component: EditUserComponent },
  { path: '**', title: '404', component: PaigeNotFoundComponent },
];
