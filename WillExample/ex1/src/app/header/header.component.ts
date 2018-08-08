import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  h3 = '記載著 Will 在網路世界的學習心得與技術分享';

  constructor() {
    setTimeout(() => {
      this.title = 'The Will Will Web';
    }, 3000);
  }

  changeTitle($event: MouseEvent) {
    this.title = 'The Will Will Web SKR~';

    if ($event.altKey) {
      this.title = 'SKR SKR SKR~';
    }

    console.log($event);
  }

  changeTitle2(altKey: boolean) {
    if (altKey) {
      this.h3 = 'SKR SKR SKR~';
    }
  }


  ngOnInit() {
  }

}
