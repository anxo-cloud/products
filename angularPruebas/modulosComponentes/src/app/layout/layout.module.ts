import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalComponent } from './legal/legal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopbarComponent, MainContentComponent, LegalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopbarComponent, MainContentComponent, LegalComponent]
})
export class LayoutModule { }
