import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProducts';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: IProducts[];
  upproducts: IProducts[] = [];
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;
  
  constructor() { 
    this.products = [
      {
        product_id : "pd100",
        product_img : "https://www.colatour.com.tw/Cola_NoBackUp/COLA/A03P_Package/Project/2018TYO-2D1N-A04.jpg",
        product_name : "可樂自由行 - 東京",
        product_price : 10500,
        product_details : "新品●格拉斯麗淺草酒店 - 東京2天1夜",
        product_quality : 2
      },
      {
        product_id : "pd101",
        product_img : "https://www.colatour.com.tw/Cola_NoBackUp/COLA/A03P_Package/Project/2018TYO-3D2N-A01.jpg",
        product_name : "可樂自由行 - 東京",
        product_price : 54000,
        product_details : "湯●憩 大江戶溫泉物語 - 東京3天2夜 - 出發日期：2018/05/10 ~ 2018/12/30",
        product_quality : 5
      },
      {
        product_id : "pd102",
        product_img : "https://www.colatour.com.tw/Cola_NoBackUp/COLA/A03P_Package/Project/2018OSA-2D1N-A01.jpg",
        product_name : "可樂自由行 - 大阪",
        product_price : 8699,
        product_details : "新品●FP HOTELS GRAND難波南酒店 - 大阪2天1夜》 - 出發日期：2018/10/01 ~ 2019/03/31",
        product_quality : 6
      },
      {
        product_id : "可樂自由行 - 東京",
        product_img : "https://www.colatour.com.tw/Cola_NoBackUp/COLA/A03P_Package/Project/2018OSA-3D2N-B01.jpg",
        product_name : "Headphone",
        product_price : 11199,
        product_details : "熱銷●VIA INN系列 - 大阪3天2夜 - 出發日期：2018/07/16 ~ 2019/03/31",
        product_quality : 13
      }
    ];
   }

  ngOnInit() {
    this.totalPrice();
  }
  getpopup(det) {
    this.selectedProduct.next(det);
  }

  delpopup(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * this.products[i].product_quality);
    }
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality += 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality -= 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }
}

