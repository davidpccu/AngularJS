import { Component, OnInit } from '@angular/core';
import { HiServiceService } from '../hi-service.service';
import { IGetRandomService } from '../service/iget-random.service';
import { Observable, of, interval } from 'rxjs';
import { catchError, map, tap, take } from 'rxjs/operators';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const myInit = interval(1000);
const takeFive = myInit.pipe(take(5));

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  numComp3: number;
  num1 = 40;
  num2 = 50;
  myDate: AsyncAction;
  myCount = myInit.pipe(take(5));
  constructor(private myHiService: HiServiceService,
    private myGetPost: IGetRandomService,
    private http: HttpClient) {
    this.numComp3 = this.myHiService.getFn3();
  }

  setSetting() {
    this.myHiService.num1 = this.num1;
    this.myHiService.num2 = this.num2;
  }

  GetSetting() {
    this.numComp3 = this.myHiService.getFn3();
  }

  ngOnInit() {
    // this.myDate = this.myGetPost.getConfig();
    // myInit.subscribe(x => console.log('Next: ', x));
    // takeFive.subscribe(x => console.log(x));

    this.myCount.subscribe(n => {
    this.myDate = `Hi myCount - Observeable ${n} :` + this.setSetting();
      console.log(this.myDate);
    }
    );
    // myInt = myInt.pipe(take(5));
    myInit.subscribe(n => {
    this.myDate = `Hi myInt - Observeable ${n} :` + this.GetSetting();
      console.log(this.myDate);
    }
    );
    // myInt.subscribe( n=> console.log('Hi Observeable ${n} :' + this.getResult1()) );

    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe( data => console.dir(data));

    this.http.get('https://jsonplaceholder.typicode.com/posts', {responseType: 'text'}).subscribe( data => console.dir(data));
  }

}
