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


//banner components
import { BannerComponent } from './components/header-comps/banner-comps/banner/banner.component';


//personal components



//experience components
import { ExpComponent } from './components/main-comps/exp-comps/exp/exp.component';

//education components
import { EduComponent } from './components/main-comps/edu-comps/edu/edu.component';

//skills components
import { HardSkillsComponent } from './components/main-comps/skill-comps/hard-skills/hard-skills.component';
import { SkillFigComponent } from './components/main-comps/skill-comps/skill-fig/skill-fig.component';
import { SoftSkillsComponent } from './components/main-comps/skill-comps/soft-skills/soft-skills.component';

//project components
import { ProComponent } from './components/main-comps/pro-comps/pro/pro.component';

//foooter components
import { FooterComponent } from './components/footer-comps/footer/footer.component';
import { MainComponent } from './components/main-comps/main/main.component';
import { HeaderComponent } from './components/header-comps/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//rutas
import {APP_ROUTING } from './app.routes';

import { NameProfessionComponent } from './components/header-comps/name-profession-comps/name-profession/name-profession.component';
import { PhotoComponent } from './components/header-comps/photo-comps/photo/photo.component';
import { AboutComponent } from './components/header-comps/about-comps/about/about.component';

import { HomeComponent } from './components/home-comps/home/home.component';








@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExpComponent,
    EduComponent,
    HardSkillsComponent,
    SkillFigComponent,
    SoftSkillsComponent,
    ProComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    NameProfessionComponent,
    PhotoComponent,
    AboutComponent,
    HomeComponent,
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
