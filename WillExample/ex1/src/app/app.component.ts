import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  h3 = '記載著 Will 在網路世界的學習心得與技術分享';
  inputLength  = 0;
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

  showInput($event) {
    this.inputLength = $event.target.value.length;

    if ($event.key === 'Escape') {
      $event.target.value = '';
      this.inputLength = $event.target.value.length;
    }
  }
}
