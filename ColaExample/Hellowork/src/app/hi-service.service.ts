import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiServiceService {
  num1 = 10;
  num2 = 20;

  constructor() { }

  getFn(): void {
  }
  getFn2(UserID: string) {
   }
  getFn3(): number {
    let result: number;
    let range: number;
    range = this.num2 - this.num1;
    result = Math.floor(range * Math.random()) + +this.num1;
    return result;
  }
}
