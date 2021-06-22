import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { MatTreeFlattener } from '@angular/material/tree';



/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface DataNode {
  name: string;
  children?: DataNode[];


}
const TREE_DATA: DataNode[] = [
  {
    name: 'Patient Population Insights',
    children: [
      {name: 'New & Current Patients Population'},
      {name: 'Diagnosis & Procedure Codes'},
      
    ]
  }, 
      
    ];
  


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-exploration-item',
  templateUrl: './exploration-item.component.html',
  styleUrls: ['./exploration-item.component.css']
})
export class ExplorationItemComponent  {
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
