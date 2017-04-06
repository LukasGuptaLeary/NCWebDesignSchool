import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';

export const UsersRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AddUserComponent }
];
