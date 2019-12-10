import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HeroesComponent } from './heroes/heroes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutModule } from './about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavShellComponent} from './layout/nav-shell/nav-shell.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NotFoundComponent,
    NavShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AboutModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
