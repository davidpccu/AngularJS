import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  myString: String = '';
  constructor( private myRoute: ActivatedRoute ) {
   }

  ngOnInit() {
    this.myString = this.myRoute.snapshot.paramMap.get('id');
  }
}
