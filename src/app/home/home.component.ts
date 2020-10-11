import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Title} from "@angular/platform-browser";
import { SpacexService } from "../services/spacex.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  spaceXData$: Observable<any[]>;
  spaceXDataTemp$: Observable<any[]>;
  
  constructor(private title: Title,private spacexService:SpacexService) { }

  ngOnInit() {
    this.title.setTitle("SpaceX");
        
        this.spaceXData$ = this.spacexService.findAllSpaceXData()
                .pipe(
                    map(Object.values)
                )
        this.spaceXDataTemp$ = this.spaceXData$;
  }

  filterByYear(filterBy,filterChk){
    this.spaceXDataTemp$ = this.spaceXData$.pipe(
        map(result =>{
            return result.filter(res =>{
                if(filterChk == 'yearFilter'){
                    return res.launch_year === filterBy
                }else if(filterChk == 'launch_success'){
                    return res.launch_success === filterBy
                }else if(filterChk == 'landing_success'){
                    return res.landing_success === filterBy
                }                    
            })
        })
      )
   
  }

}
