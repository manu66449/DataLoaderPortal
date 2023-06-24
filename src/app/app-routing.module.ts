import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProcessPatientComponent } from './process-patient/process-patient.component';
import { UploadPatientComponent } from './upload-patient/upload-patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadPatientComponent },
  { path: 'modify', component: ModifyPatientComponent },
  { path: 'process', component: ProcessPatientComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
