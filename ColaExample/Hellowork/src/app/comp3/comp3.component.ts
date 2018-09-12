import { Component, OnInit } from '@angular/core';
import { HiServiceService } from '../hi-service.service';
import { IGetRandomService } from '../service/iget-random.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  numComp3: number;
  num1 = 40;
  num2 = 50;
  myDate: object;
  constructor(private myHiService: HiServiceService,
              private myGetPost: IGetRandomService) {
    this.numComp3 =  this.myHiService.getFn3();
   }

  setSetting() {
    this.myHiService.num1 = this.num1;
    this.myHiService.num2 = this.num2;
  }

  GetSetting() {
    this.numComp3 = this.myHiService.getFn3();
  }

  ngOnInit() {
    this.myDate = this.myGetPost.getConfig();
  }

}
