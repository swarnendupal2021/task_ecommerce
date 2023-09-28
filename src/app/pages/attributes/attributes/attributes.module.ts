import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesComponent } from './attributes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../common/share/share.module';




const routes: Routes = [
  {
      path: '',
      component: AttributesComponent
  }
];
@NgModule({
  declarations: [
    AttributesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  //  CommonModule,
   // SharedModule
  ]
})
export class AttributesModule { }
