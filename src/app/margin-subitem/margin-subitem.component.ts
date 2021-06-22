import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface DataNode {
  name: string;
  children?: DataNode[];


}
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


const TREE_DATA: DataNode[] = [
  {
    // Controls the subItems order, would be difficult to make it into a live link
    name: 'Margin',
    children: [
      {name: 'Top Underwater'},
      {name: 'Practice Profitability '},
      
    ]
  }, 
      
    ];

@Component({
  selector: 'app-margin-subitem',
  templateUrl: './margin-subitem.component.html',
  styleUrls: ['./margin-subitem.component.css']
})
export class MarginSubitemComponent  {
  private _transformer = (node: DataNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
constructor() { 
  this.dataSource.data = TREE_DATA;
}
hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  

}
