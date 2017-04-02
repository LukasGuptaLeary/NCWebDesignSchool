import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DegreesComponent } from './degrees/degrees.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';

const appRouting: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'degrees', component: DegreesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'faculty', component: FacultyComponent }
];

export const Routing = RouterModule.forRoot(appRouting);
