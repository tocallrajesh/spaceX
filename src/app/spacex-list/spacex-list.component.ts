import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex-list',
  templateUrl: './spacex-list.component.html',
  styleUrls: ['./spacex-list.component.css']
})
export class SpacexListComponent implements OnInit {
  @Input()
  spaceXData: any[]; 
  constructor() { }

  ngOnInit() {
  }

}
