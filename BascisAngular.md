# AngularJS

## ng-app 
+ 宣告angular的範圍。
+ 在DOM載入後，AngularJS就會開始尋找ng-app這個字，找到的話，就會把這頁面當成是AngularJS應用程式。
+ 也可以局部使用AngularJS：如果只是局部需要用到，而非整站，也可以把這個字放在某個應用到AngularJS的div中(例如:div)。

## ng-model
+ 綁定的動作

``` bash
  <p>My name is {{yourName || 'Anna'}}!</p>
  <label>請輸入你的名字，也和大家自我介紹吧! </label>
  <input type="text" ng-model="yourName" />
```

為什麼變數後面要加上|| ？
主要的目的是：如果無法獲得yourName變數的值，就可以預先顯示"Anna這個字串"


## ng-controller
+ 用來綁定view(html)和model(js)的連結。
+ 使用ng-controller，建立view和model的關係

``` bash
  <body ng-controller="TodoCrtl">
```

+ 指定名稱為"TodoCrtl"的controller，必須與controllers.js裡的主function名稱相同
+ 在model裡面指定變數name的方式為$scope.name，view再透過{{ name }}顯示。

## $scope

+ scope是AngularJS在建立(controller)應用程式時，會產生一個物件，用來代表應用程式的Model。所以我們透過$scope.變數，才能得到變數的(值)位址。

``` bash
  function TodoCrtl($scope) { 
    $scope.name = "Anna";
  }
  
  <p ng-controller="TodoCrtl">My name is {{ name }}!</p>
```

[Demo](http://jsbin.com/ogecuw/2/edit?html,js,output "Demo")

## ng-click

透過html的按鈕，去觸發ng-click事件

``` bash
  <input type="button" value="Click" ng-click="action()">
  
  $scope.action = function () {
    $scope.price = 100;
  };
```

[Demo](http://output.jsbin.com/angularjs-controller/3 "Demo")

## ng-show/ng-hide

+ 顯示: 欲顯示的文字
+ 隱藏: 欲隱藏的文字
+ 判斷是否要顯示

``` bash
// 在欲觸發的事件上，綁定model名稱
    <select ng-model="selection">
            <option value="content1" >下拉選單文字1</option>
            <option value="content2">下拉選單文字2</option>
    </select>
    
//透過判斷式，決定顯示內容
<article ng-show="自訂model名稱 == 'content1'">判斷是否要顯示的內容</article>
``` 

[Demo](http://jsbin.com/opojaq/8/edit?html,output "Demo")
[Demo](http://jsbin.com/afomon/7/edit?html,output "Demo")

## ng-init 

+ model一開始載入，會先執行ng-init，我們可以利用ng-init設定初始值  

``` bash
  <div ng-app="">
    <div ng-init="greeting='Hello'; person='World'">
      {{greeting}} {{person}}!
    </div>
  </div>
``` 
+ 只要在你欲顯示的區域範圍內加上ng-init="變數＝‘值’"
+ 若有兩個以上的變數需要設定初始值，則使用分號區隔

[Demo](http://jsbin.com/ucodup/7/edit?html,js,output "Demo")

``` bash

// 加上一個名稱為"MainCtrl"的controller

  <div ng-app="" ng-controller="MainCtrl">
    <div>
      {{greeting}} {{person}}!
    </div>
  </div>
  
// 在名稱為"MainCtrl"的controller中，建立兩個名稱為greeting和person的變數，並且指定初始值。
  function MainCtrl($scope){
    $scope.greeting="Hello";
    $scope.person="World";
  }

``` 

## ng-repeat
+ 透過ng-repeat指令，從陣列中取出每一個item的內容。
+ $index –{number} –取出陣列中的index。(從0開始)
+ $first –{boolean} –如果是第一個項目，就傳回true、否則為false。 
+ $middle –{boolean} –如果不是第一個和最後一個項目，就傳回true、否則為false。 
+ $last –{boolean} –如果是最後一個項目，就傳回true、否則為false。

``` bash
//增加ng-controller，綁定model。
    <div ng-controller="MainCtrl">

//在欲顯示的html標籤中，加上ng-repeat。
    <p ng-repeat="name in names"> {{name}}</p>

// 使用$index可以取用陣列id
    <p ng-repeat="name in names">{{$index+1}}. {{name}}</p>
    
// 使用.length可以取用陣列長度
    <p>以上有{{names.length}}筆資料</p>
```
[Demo](http://jsbin.com/ukatix/3/edit?html,js,output "Demo")

### HTML input

#### input事件有以下屬性
+ name 名稱
+ ng-model 綁定的資料
+ required 限制是否必填
+ ng-required 限制是否必填
+ ng-minlength 限制最小長度
+ ng-maxlength 限制最大長度
+ ng-pattern 限制RegExp格式
+ ng-change 當input的值發生變化的時候執行

#### 除此之外，input還包含了以下類型：
+ type="checkbox"
+ type="email"
+ type="number"
+ type="radio"
+ type="text"
+ type="url"

``` bash

checkbox 範例

Html:

 <form name="myForm" ng-controller="Ctrl">
    Value1: <input type="checkbox" ng-model="value1"> <br/>
    Value2: <input type="checkbox" ng-model="value2"
                   ng-true-value="YES" ng-false-value="NO"> <br/>
    <tt>value1 = {{value1}}</tt><br/>
    <tt>value2 = {{value2}}</tt><br/>
 </form>
 
 Js:
 
   function Ctrl($scope) {
    $scope.value1 = true;
    $scope.value2 = 'YES';
  }

``` 

[Demo](http://jsbin.com/egavik/1/edit "Demo")

## ng-options

+HTML SELECT事件有一個ng-options參數，ng-options透過ng-model 綁定，用來顯示下拉選單。

``` bash

<select ng-model="Select1" ng-options="lottery.ProductName for lottery in lotteryModel">
    <option value="">-- 請選擇 --</option>
</select>

<p>{{ Select1.ProductName }}</p>

一定要使用ng-model去data-bind
透過{{ Select1.ProductName }} 把選到的值呼叫出來

``` 

[Demo1](http://jsbin.com/oQEnaKE/1/edit?html,js,output "Demo")
[Demo2](http://jsfiddle.net/MTfRD/3/ "Demo")




[參考](http://ithelp.ithome.com.tw/articles/10132196 "參考")
