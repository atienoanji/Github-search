import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user = User;


  // <div *ngFor='let github of githubs;let i = index'>
  //      <li  id="{{i}}" appStrikethrough>{{github.name}}</li>
  //      <button  (click)='toogleNavigation(i)'>Toogle Navigation</button>
  //




  constructor() { }

  ngOnInit() {
  }

}
