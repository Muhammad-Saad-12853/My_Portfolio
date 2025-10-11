import { NgModule, CUSTOM_ELEMENTS_SCHEMA, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Resume } from './resume/resume';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { ProjectCard } from './project-card/project-card';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModal } from './project-modal/project-modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    App,
    Header,
    Navbar,
    Home,
    Resume,
    Portfolio,
    Contact,
    ProjectCard,
    ProjectModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
