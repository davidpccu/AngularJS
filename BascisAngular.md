# AngularJS

#### angularJS的特性是遵循MVC框架。

+ view是用來顯示資料
+ model是用來存放資料
+ controller是用來建立view與model之間的行為，處理事件。


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

+ HTML SELECT事件有一個ng-options參數，ng-options透過ng-model 綁定，用來顯示下拉選單。

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

## ng-switch

+ 根據ng-switch去篩選要選擇的內容
+ 通常會和ng-option的下拉選單一起搭配使用

``` bash

    <select ng-model="Select1" required ng-options="lottery.ProductName for lottery in lotteryModel"></select>

使用ng-switch on，作為篩選的依據 & 使用ng-switch-when，決定當下是否顯示

<body ng-controller="lotteryCtrl">
    <div ng-switch on="Select1.ProductName">
        <div ng-switch-when="威力彩">威力彩</div>
        <div ng-switch-when="今彩539">今彩539</div>
        <div ng-switch-default>大樂透</div> //使用ng-switch-default，預設的顯示內容
    </div>
    
    function lotteryCtrl($scope)
    {
      $scope.lotteryModel = [
        {
          id: 1,
          ProductName: '威力彩'
        },
        {
          id: 2,
          ProductName: '今彩539'
        },
        {
          id: 3,
          ProductName: '大樂透'
        }];

      // 也可以在controller中，建立初始值
      $scope.Select1 = $scope.lotteryModel[0];
    }
</body>    
``` 

[Demo](http://jsbin.com/UCegIve/2/edit?html,js "Demo")

## ng-change

+ 當改變輸入的數值，就會執行ng-change事件。


1. 搭配checkbox的input輸入

``` bash

// 使用ng-model指令，命名"confirmed"的model作為綁定資料。
// 當model 的資料改變，就會執行change()這個function

<input type="checkbox" ng-model="confirmed" ng-change="change()"/>

function Controller($scope) {

  $scope.change = function() {
    $scope.counter++;
  };
}

``` 

2. 搭配ng-option的下拉選單輸入

``` bash

// 一旦選擇改變下拉選單的內容，就會執行update() 這個function。

<select ng-options="size as size.counter for size in sizes " ng-model="item" ng-change="update()"></select>

$scope.sizes = [ 
    {code: 1, name: 'n1',counter:1}, 
    {code: 2, name: 'n2',counter:2}
  ];

$scope.update = function() {
    angular.forEach($scope.sizes, function (value, key) {
        
        value.counter=value.counter*3;
        
        });
  };
$scope.item=$scope.sizes[0];

``` 

[Demo](http://jsbin.com/ICAyANe/3/edit?html,js,output "Demo")

## ng-include

+ 用來載入html的指令

``` bash

使用ng-option建立下拉選單，顯示剛剛建立$scope.templates中的資料。

<div ng-controller="Ctrl">
    <select ng-model="template" ng-options="t.name for t in templates">
      <option value="">(blank)</option>
    </select>
    url of the template: <tt>{{template.url}}</tt>
    <hr/>
    <div>
      在顯示的區塊中，使用ng-include去綁定欲顯示的html
      <div ng-include="template.url"></div>
    </div>
  </div>


在controller裡面指定html的資料

function Ctrl($scope) {
  $scope.templates =
    [ { name: 'template1.html', url: 'template1.html'}
    , { name: 'template2.html', url: 'template2.html'} ];
    
  下拉選單內容，預設為第一筆。  
  $scope.template = $scope.templates[0];
}

``` 

[Demo](http://plnkr.co/edit/Y43TCNqB62Riyy0pbMG9?p=preview "Demo")


## ng-src

+ 用來取代html中 img 標籤裡的src屬性
+ 由於AngularJS是整個網站載完後才開始編譯，使用ng-src可以解決還沒載入完html發生的錯誤。

``` bash

直接使用ng-src指令取代src屬性

<img src="圖片路徑" />
<img ng-src="{{圖片路徑}}" />

也可以使用

<img ng-src="http://www.gravatar.com/avatar/{{hash}}"/>

```

[Demo](http://jsbin.com/eKoG/5/edit?html,js,output "Demo")

## ng-href

+ 取代html中 a 標籤裡的href屬性
+ 如果Angular還沒載入或載入失敗，會直接讓href讀取到{{ }}的內容，而a 標籤裡的href屬性無法辨識{{ }}，就會連結到404的錯誤頁面。

``` bash

<a href="https://www.youtube.com/{{ y1 }}"> Youtube1 </a>
<a ng-href="https://www.youtube.com/{{ y2 }}"> Youtube2 </a>

就算遇到Angular還沒載入或載入失敗的情況
ng-href僅會將{{}}裡面的值，當作一段字串
避免發生連結錯誤的情況

```

[Demo](http://jsbin.com/uqAseSi/4/edit?html,js,output "Demo")

## ng-checked

+ 綁定checkbox勾選框

``` bash

全部勾選/取消全部勾選的checkbox，加入ng-model="model名稱"
<input type="checkbox" ng-model="master">

其他要被勾選的checkbox裡，就加入ng-checked="model名稱"
<p ng-repeat="checkText in checkTexts">
  <input type="checkbox" ng-checked="master">
  {{checkText.checkName}}
</p>
```

[Demo](http://jsbin.com/UgUfitU/1/edit?html,js "Demo")

## $timeout

+ 用來倒數、計時的一種方法

``` bash

以ng-controller宣告timeout執行區域，並傳入$timeout指令
<body ng-controller="Ctrl">
  {{counter}}
  <button ng-click="stop()">Stop</button>    
</body>


透過$timeout觸發timeout

function Ctrl($scope,$timeout) {
    $scope.counter = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);
    };
    var mytimeout = $timeout($scope.onTimeout,1000);
    
    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    };
            
}

```

[Demo](http://jsbin.com/EmijUBi/1/edit?html,js,output "Demo")


## ng-bind

+ 解決angularjs沒有載入完成或發生失敗的狀況。

通常我們會將綁定model名稱放在{{ }}裡面來顯示model的值。
正式開發專案時，有可能會載入很多library，
如果我們載入太多library，HTML 已經載入完畢，而angularjs沒有載入完成或發生失敗的狀況，
瀏覽器不認識{{ }}這個元素，所以就會直接將{{ }}的內容，當作字串完整的顯示出來。

或是網頁一開始HTML 已經載入完畢，後來angularjs才載入完成，
即使在執行上沒有問題，但{{ }}的內容就會在網頁上面閃一下，畫面感覺好像有bug 似的。
此時，我們可以使用ng-bind這個angular指令解決這個問題。

``` bash

在欲顯示的標籤內加入ng-bind="model名稱"

<span ng-bind="name"></span>

```

[Demo](http://jsbin.com/aMomUWU/1/edit?html,js,output "Demo")


## ng-cloak

+ 和ng-bind很類似，同樣可以解決angularjs沒有載入完成或發生失敗的狀況。
+ 但ng-cloak指令需要另外增加css，用來解決跨瀏覽器顯示的問題。

``` bash

ng-bind的用法是在標籤內使用ng-bind去指定model名稱。
<span ng-bind="name"></span>

ng-bind的用法也是在標籤內加入ng-cloak指令，但在標籤之間使用{{ model名稱 }}去綁定資料。
<span ng-cloak>{{ name }}</span>

```

[Demo](http://jsbin.com/aQOBun/3/edit?html,js,output "Demo")

## ng-bind-template

+ 把多個model綁成一個群組，再用ng-bind的方法去綁定。

ng-bind、ng-bind-template、ng-cloak都可以解決angularJS檔案來不及被讀取的情況。
但根據使用上較彈性且較為簡單的選擇是: ng-bind-template>ng-bind>ng-cloak

1. ng-bind-template可以同時綁定兩個以上的model。
2. ng-bind只能綁定一個model。
3. ng-cloak可以綁定兩個以上的model，但只能在初次載入時設定model值，且需要增加css解決跨瀏覽器的問題。


``` bash

ng-bind的用法：
<span ng-bind="name"></span>

ng-bind-template的用法：
<pre ng-bind-template="{{salutation}} {{name}}">

和ng-cloak的用法：
<span ng-cloak class="ng-cloak">{{ name }}</span>

```

[Demo](http://jsbin.com/aMomUWU/2/edit?html,output "Demo")

## ng-bind-html

+ 用來呈現html效果的指令。

``` bash

使用ng-bind-html需要載入ngSanitize模組。
html-必須載入angular-sanitize.js

js-定義angularjs其他模組
var app = angular.module('app', ['ngSanitize']);

app.controller('MyCtl', function($scope) {
    // 建立一個名稱為someHtml的變數，裡面放一個圖片的img標籤
    $scope.someHtml = '<img src="http://angularjs.org/img/AngularJS-large.png" />'; 
});

直接使用ng-bind-html來指令model名稱。
<div ng-bind-html="someHtml"></div>

如果要單純顯示html程式碼， 就可以使用ng-bind顯示內容。
<pre ng-bind="someHtml"></pre>

```

[Demo](http://jsbin.com/oYAqeya/2/edit?html,js "Demo")

## ng-class

+ 在html中設定css樣式

1. 針對指定區域，如果true就執行Ａ樣式，false就執行B樣式。

``` bash

(1) 設定一個變數名稱，用來控制樣式的顯示範例中，是在controller裡面，建立一個名稱為isActive的變數名稱。

    function Ctrl($scope) { 
        $scope.isActive = true;
    }

(2) 設定true和false的樣式，範例中設定兩個名稱為active和inactive的樣式

    .active{
      color:red;
    }
    .inactive{
      color:blue;
    }

(3) 將ng-class放在欲顯示的標籤中
    {true: '樣式名稱1', false: '樣式名稱2}[控制變數]
    如果變數isActive是true，執行名稱為style1的樣式。
    如果變數isActive是false，則執行稱為style2的樣式。

    <p ng-class="{true: 'active', false: 'inactive'}[isActive]">Hello World</p>

```

[Demo](http://jsbin.com/rutizelozo/edit?html,js,output "Demo")


2. 針對指定區域，如果x變數等於true就執行Ａ樣式，y變數等於true也可以執行B樣式。

``` bash

(1) 建立樣式是否顯示的控制變數，範例中建立兩個變數，並將內容預設為true

    function Ctrl($scope) { 
        $scope.isActive1 = true;
        $scope.isActive2 = true;
    }
    
(2) 建立樣式，範例中建立style1和style2兩個樣式

    .style1{
      text-decoration: line-through;
    }
    .style2{
      color:blue;
    }

(3) 在標籤中加入ng-class指令，並加入{’css名稱1‘：是否顯示,’css名稱2‘：是否顯示} 樣式中間以逗號區隔

<p ng-class="{'style1': isActive1, 'style2': isActive2}">Hello World</p>

```

[Demo](http://jsbin.com/jugunagete/edit?html,js,output "Demo")


Angular ng-class 製作動畫 DOM 的出現/消失效果

[Demo](http://jsfiddle.net/deathhell/eek3e/ "Demo")


## ng-blur

+ 使用在window, input, select, textarea, a，這五種標籤，用來判斷焦點是否存在。

``` bash

首先建立兩個樣式，用來顯示文字框焦點是否存在的視覺效果
    input[type="text"].myFocus {
        background-color: yellow;
      }
    input[type="text"].myBlur {
        background-color: red;
      }
      
使用ng-init，建立變數的初始值

focus →是否顯示焦點存在的樣式
blur →是否顯示焦點離開的樣式
active →顯示文字框焦點是否存在

    ng-init="focus=false;blur=false;active=false"
    
用ng-class來顯示不同的樣式。
    ng-class="{ myFocus: focus, myBlur: blur }" 
    
用ng-focus和ng-blur這兩個事件，去執行不同的行為
    ng-focus="focus=true;blur=false;active=true;" ng-blur="blur=true;focus=false;active=false;" />

```

[Demo](http://jsbin.com/EhepoBe/1/edit?html,css,output "Demo")


## $watch

+ 指定監控的範圍，一旦範圍內的value發生改變，所有地方都會自動更新
+ 當view或model改變時，就會觸發事件
+ watch的值會傳回newValue,oldValue，提供“改變的新數值”和“前一次改變的舊數值

``` bash

在欲監控的的標籤下，給定model名稱，用來綁定內容，範例中是給輸入框名稱為"test1"的model

    <input type="text" ng-model="test1"/>

使用$watch指令，決定監控的model內容，監控內容發生改變後，並接著執行function。

    $scope.$watch('test1', function(newValue, oldValue) {
      //這裡輸入觸發$watch之後，欲觸發的行為

    },true);
    
```

[Demo](http://jsbin.com/oHIXIqa/3/edit?html,js,console,output "Demo")


## ng-style

+ 直接設定css樣式的指令

``` bash

在欲執行的標籤內，加入ng-style指令，範例中是執行一個名稱為set_color的方法。

    <p ng-style="set_color()">Anna</p>

觸發function之後，回傳一個object，裡面放你要設定的CSS樣式

    $scope.set_color = function (){
        return { color: "blue" };
    };
    
```

[Demo](http://jsbin.com/oKohAba/2/edit?html,js,output "Demo")


## angular與form的應用

+ 透過angular與form的應用，可以快速處理表單可能會遇到的問題。

[Demo](http://ithelp.ithome.com.tw/articles/10140147 "Demo")


## ng-form





[參考](http://ithelp.ithome.com.tw/articles/10132196 "參考")
