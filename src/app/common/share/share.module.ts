import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { SideNavComponent } from '../component/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    TreeModule, 
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    DropdownModule
  ],
  exports:[ 
    SidebarModule,
    ButtonModule,
    ReactiveFormsModule,
    TreeModule, 
    InputTextModule,
    MultiSelectModule,
    TableModule,
    FormsModule,
    DropdownModule,
    CommonModule]
})
export class SharedModule { }
