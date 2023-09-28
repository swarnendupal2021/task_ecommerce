import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../common/share/share.module';




const routes: Routes = [
  {
      path: '',
      component: ProductsComponent
  }
];
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  //  CommonModule,
   // SharedModule
  ]
})
export class ProductsModule { }
