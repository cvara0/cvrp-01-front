import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import{ScrollingModule} from '@angular/cdk/scrolling';
import{DragDropModule} from '@angular/cdk/drag-drop';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";//para que no se refresque el formulario

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localEn from '@angular/common/locales/en';
registerLocaleData(localEs);
registerLocaleData(localEn);

//navbar components
import { NavbarComponent } from './components/header-comps/navbar-comps/navbar/navbar.component';

//banner components
import { BannerComponent } from './components/header-comps/banner-comps/banner/banner.component';
import { DeleteBannerBtnComponent } from './components/header-comps/banner-comps/delete-banner-btn/delete-banner-btn.component';
import { EditBannerBtnComponent } from './components/header-comps/banner-comps/edit-banner-btn/edit-banner-btn.component';

//personal components



//experience components
import { ExpComponent } from './components/main-comps/exp-comps/exp/exp.component';
import { AddExpBtnComponent } from './components/main-comps/exp-comps/add-exp-btn/add-exp-btn.component';
import { DeleteExpBtnComponent } from './components/main-comps/exp-comps/delete-exp-btn/delete-exp-btn.component';
import { EditExpBtnComponent } from './components/main-comps/exp-comps/edit-exp-btn/edit-exp-btn.component';

//education components
import { EduComponent } from './components/main-comps/edu-comps/edu/edu.component';
import { AddEduBtnComponent } from './components/main-comps/edu-comps/add-edu-btn/add-edu-btn.component';
import { DeleteEduBtnComponent } from './components/main-comps/edu-comps/delete-edu-btn/delete-edu-btn.component';
import { EditEduBtnComponent } from './components/main-comps/edu-comps/edit-edu-btn/edit-edu-btn.component';

//skills components
import { AddSkillBtnComponent } from './components/main-comps/skill-comps/add-skill-btn/add-skill-btn.component';
import { DeleteSkillBtnComponent } from './components/main-comps/skill-comps/delete-skill-btn/delete-skill-btn.component';
import { EditSkillBtnComponent } from './components/main-comps/skill-comps/edit-skill-btn/edit-skill-btn.component';
import { HardSkillsComponent } from './components/main-comps/skill-comps/hard-skills/hard-skills.component';
import { SkillFigComponent } from './components/main-comps/skill-comps/skill-fig/skill-fig.component';
import { SoftSkillsComponent } from './components/main-comps/skill-comps/soft-skills/soft-skills.component';

//project components
import { ProComponent } from './components/main-comps/pro-comps/pro/pro.component';
import { AddProBtnComponent } from './components/main-comps/pro-comps/add-pro-btn/add-pro-btn.component';
import { DeleteProBtnComponent } from './components/main-comps/pro-comps/delete-pro-btn/delete-pro-btn.component';
import { EditProBtnComponent } from './components/main-comps/pro-comps/edit-pro-btn/edit-pro-btn.component';

//foooter components
import { FooterComponent } from './components/footer-comps/footer/footer.component';
import { MainComponent } from './components/main-comps/main/main.component';
import { HeaderComponent } from './components/header-comps/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarLinkBtnComponent } from './components/header-comps/navbar-comps/navbar-link-btn/navbar-link-btn.component';
import { NavbarLoginBtnComponent } from './components/header-comps/navbar-comps/navbar-login-btn/navbar-login-btn.component';
import { NavbarRegisterBtnComponent } from './components/header-comps/navbar-comps/navbar-register-btn/navbar-register-btn.component';

//rutas
import {APP_ROUTING } from './app.routes';

import { NameProfessionComponent } from './components/header-comps/name-profession-comps/name-profession/name-profession.component';
import { EditNaproBtnComponent } from './components/header-comps/name-profession-comps/edit-napro-btn/edit-napro-btn.component';
import { EditPhotoBtnComponent } from './components/header-comps/photo-comps/edit-photo-btn/edit-photo-btn.component';
import { PhotoComponent } from './components/header-comps/photo-comps/photo/photo.component';
import { AboutComponent } from './components/header-comps/about-comps/about/about.component';
import { EditAboutBtnComponent } from './components/header-comps/about-comps/edit-about-btn/edit-about-btn.component';
import { DeleteAboutBtnComponent } from './components/header-comps/about-comps/delete-about-btn/delete-about-btn.component';
import { AddAboutBtnComponent } from './components/header-comps/about-comps/add-about-btn/add-about-btn.component';
import { HomeComponent } from './components/home-comps/home/home.component';
import { NavbarLogoutBtnComponent } from './components/header-comps/navbar-comps/navbar-logout-btn/navbar-logout-btn.component';
import { NavbarEditAllBtnComponent } from './components/header-comps/navbar-comps/navbar-edit-all-btn/navbar-edit-all-btn.component';






@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DeleteBannerBtnComponent,
    EditBannerBtnComponent,
    ExpComponent,
    EduComponent,
    EditExpBtnComponent,
    DeleteExpBtnComponent,
    AddExpBtnComponent,
    EditEduBtnComponent,
    DeleteEduBtnComponent,
    AddEduBtnComponent,
    AddSkillBtnComponent,
    DeleteSkillBtnComponent,
    EditSkillBtnComponent,
    HardSkillsComponent,
    SkillFigComponent,
    SoftSkillsComponent,
    ProComponent,
    AddProBtnComponent,
    DeleteProBtnComponent,
    EditProBtnComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarLinkBtnComponent,
    NavbarLoginBtnComponent,
    NavbarRegisterBtnComponent,
    NameProfessionComponent,
    EditNaproBtnComponent,
    EditPhotoBtnComponent,
    PhotoComponent,
    AboutComponent,
    EditAboutBtnComponent,
    DeleteAboutBtnComponent,
    AddAboutBtnComponent,
    HomeComponent,
    NavbarLogoutBtnComponent,
    NavbarEditAllBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ScrollingModule,
    DragDropModule,
    APP_ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
