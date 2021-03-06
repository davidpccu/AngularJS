import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 @Input() var1: string;

  now = new Date();
  title = 'Angular blog';
  isUnchanged = true;
  isChanged = false;
  heroImageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  myScript = 'Template <script>alert("evil never sleeps")</script>Syntax';
  myString: String = '';
  myArray: string[];
  keyWord = '';
  myAddress: address[];

  constructor() {
    this.myArray = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];
    this.myAddress = [
      { City: 'TPE', Country: 'TPE'},
      {City: 'TSA', Country: 'TPE'},
      {City: 'OKA', Country: 'JP'}
    ];
  }

  myClick() {
    this.myString = '321';
  }

  ngOnInit() {
  }
}

// tslint:disable-next-line:class-name
interface address {
  City: string;
  Country: string;
}
