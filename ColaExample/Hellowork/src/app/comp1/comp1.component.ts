import { Component, OnInit } from '@angular/core';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  title = 'Angular blog';
  isUnchanged = true;
  isChanged = false;
  heroImageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  myScript = 'Template <script>alert("evil never sleeps")</script>Syntax';

  constructor() {
  }

  ngOnInit() {
  }

}
