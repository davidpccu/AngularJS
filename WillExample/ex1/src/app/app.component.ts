import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputLength  = 0;
  keyword = '';

  constructor() {

  }

  showInput($event) {
    this.inputLength = $event.target.value.length;

    if ($event.key === 'Escape') {
      $event.target.value = '';
      this.inputLength = $event.target.value.length;
    }
  }
}
