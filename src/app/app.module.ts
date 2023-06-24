import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploadPatientComponent } from './upload-patient/upload-patient.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProcessPatientComponent } from './process-patient/process-patient.component';
import { FormsModule } from '@angular/forms';
import { EmailvalidatorDirective } from './emailValidator.directive';
import { PasswordvalidatorDirective } from './passwordValidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UploadPatientComponent,
    ModifyPatientComponent,
    PageNotFoundComponent,
    ProcessPatientComponent,
    EmailvalidatorDirective,
    PasswordvalidatorDirective,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
