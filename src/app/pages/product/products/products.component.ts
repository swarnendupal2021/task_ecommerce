import { Component } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  listOfdata:any[] = [];
  formDataValues!: any[];
  formData:any;
  isAddNewItem = false;
  isUpadteItem = false;
  listOfCategory:any[] = [];
  listOfAttrubutes:any[] = [];
  constructor(
    private dataService:DataService){
  
  
  }
  //id, name, description, categoryId, and attributes[]
assignForm (){
  this.formData = {id:0,name:'',  description: '',categoryId:[],attributes:[]};
}
  ngOnInit(){
    this.assignForm();
    this.listOfdata =  this.dataService.getProducts();
    this.listOfAttrubutes =  this.dataService.getArrributes();
    this.listOfCategory =  this.dataService.getCategory();
    console.log( this.listOfCategory,' this.listOfCategory');
  }

  addNewItem(){
    
   this.isAddNewItem = true;
  }
  delete(product:any){
    const index = this.listOfdata.indexOf(product);
    this.listOfdata.splice(index, 1);  
    let eachIndex = 1;
    this.listOfdata.forEach((item)=>{
      item.id = eachIndex++;
    })  
    this.dataService.setProducts(this.listOfdata);
      this.assignForm();
  }
  onSubmit(){
    console.log('this.formData',this.formData)
    if(this.isUpadteItem){
      let findItem  = this.listOfdata.findIndex((item)=>item.id === this.formData.id);
      this.listOfdata[findItem] =  this.formData;
    }
    else{
      const insertId =  this.listOfdata.length + 1;
      const sampleData = {id:insertId, name: this.formData.name,
         description:this.formData.description,
         categoryId:this.formData.categoryId,
         attributes:this.formData.attributes};
      this.listOfdata.push(sampleData); 
    }
  
    this.dataService.setProducts(this.listOfdata);
    this.isAddNewItem = false;
    this.isUpadteItem = false;
    this.assignForm();
  }
  edit(product:any){
    this.isUpadteItem = true;
    this.formData = product;
  }
}
