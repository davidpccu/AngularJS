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
  constructor() {
    setTimeout(() => {
      this.title = 'The Will Will Web';
    }, 3000);
  }

  changeTitle($event) {
    this.title = 'The Will Will Web SKR~';

    if ($event.altKey) {
      this.title = 'SKR SKR SKR~';
    }

    console.log($event);
  }
}
