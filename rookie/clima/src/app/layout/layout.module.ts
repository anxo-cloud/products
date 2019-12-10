import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell/shell.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellMainComponent } from './shell/shell-main/shell-main.component';
import { ShellFooterComponent } from './shell/shell-footer/shell-footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavShellComponent } from './nav-shell/nav-shell.component';
// tslint:disable-next-line: import-spacing
import { LayoutModule as MaterialLayoutModule }  from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations:
   [ShellComponent,
    ShellHeaderComponent,
    ShellMainComponent,
    ShellFooterComponent,
    ContactComponent,
    FormulariosComponent,
    NavShellComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialLayoutModule
  ],
  exports: [ShellComponent,FormulariosComponent]
})
export class LayoutModule { }
