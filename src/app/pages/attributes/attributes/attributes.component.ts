import { Component } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
  listOfdata:any[] = [];
  formDataValues!: any[];
  formData:any;
  isAddNewItem = false;
  isUpadteItem = false;
  listOfValues=['value1','value2','value3','value4'];
  constructor(
    private dataService:DataService){
  
  
  }
assignForm (){
  this.formData = {id:0,name:'',  values: []};
}
  ngOnInit(){
    this.assignForm();
    this.listOfdata =  this.dataService.getArrributes();
    console.log(this.listOfdata,'listOfdata');
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
    this.dataService.setArrributes(this.listOfdata);
      this.assignForm();
  }
  onSubmit(){
  
    if(this.isUpadteItem){
      let findItem  = this.listOfdata.findIndex((item)=>item.id === this.formData.id);
      this.listOfdata[findItem] =  this.formData;
    }
    else{
      const insertId =  this.listOfdata.length + 1;
      const sampleData = {id:insertId, name: this.formData.name, values:this.formData.values};
      this.listOfdata.push(sampleData); 
    }
  
    this.dataService.setArrributes(this.listOfdata);
    this.isAddNewItem = false;
    this.isUpadteItem = false;
    this.assignForm();
  }
  edit(product:any){
    this.isUpadteItem = true;
    this.formData = product;
  }
}
