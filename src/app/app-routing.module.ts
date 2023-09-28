import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home/home.module')
      .then(mod => mod.HomeModule)
  }, {
    path: 'product',
    loadChildren: () => import('./pages/product/products/products.module')
      .then(mod => mod.ProductsModule)
  }, {
    path: 'attributes',
    loadChildren: () => import('./pages/attributes/attributes/attributes.module')
      .then(mod => mod.AttributesModule)
  },  {
    path: 'category',
    loadChildren: () => import('./pages/category/category/category.module')
      .then(mod => mod.CategoryModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
