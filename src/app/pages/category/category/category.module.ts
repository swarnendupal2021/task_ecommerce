import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorycomponent } from './category.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../common/share/share.module';




const routes: Routes = [
  {
      path: '',
      component: Categorycomponent
  }
];
@NgModule({
  declarations: [
    Categorycomponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  //  CommonModule,
   // SharedModule
  ]
})
export class CategoryModule { }
