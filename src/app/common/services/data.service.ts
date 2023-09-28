import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private attrubutes = [];
  
  private product = [];
  private category = []
  constructor() { }

  setProducts(data: any) {
    this.product = data;
}

  getProducts(): any[] {
    return  this.product;
  }
  setArrributes(data: any) {
    this.attrubutes = data;
}

  getArrributes(): any[] {
    return  this.attrubutes;
  }
  setCategory(data: any) {
    this.category = data;
}

  getCategory(): any[] {
    return  this.category;
  }
  getTreeNodesData() {
      return [
          {
              key: '0',
              label: 'Product',
              data: 'Product',
              icon: 'pi pi-fw pi-inbox',
              route:'product' 
          },
          {
              key: '1',
              label: 'Attributes',
              data: 'Attributes',
              icon: 'pi pi-fw pi-inbox',
              route:'attributes'
          },
          {
              key: '2',
              label: 'Category',
              data: 'Category',
              icon: 'pi pi-fw pi-inbox',
              route:'category'
          }
      ];
  }
}
