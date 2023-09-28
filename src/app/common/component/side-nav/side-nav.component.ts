import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  menus!: TreeNode[];
  sidebarVisible = true;
  constructor(private dataService:DataService,private router: Router){
    this.menus = this.dataService.getTreeNodesData();
    console.log(this.dataService.getTreeNodesData())
  }
  onNodeSelect(event: any) {
    console.log('Welcome to GeeksforGeeks',event);
    let routeList = event?.node?.route || '';

    this.router.navigate([routeList])
}
}
