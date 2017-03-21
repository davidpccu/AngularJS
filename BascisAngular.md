# AngularJS

## ng-app 
+ 宣告angular的範圍。
+ 在DOM載入後，AngularJS就會開始尋找ng-app這個字，找到的話，就會把這頁面當成是AngularJS應用程式。
+ 也可以局部使用AngularJS：如果只是局部需要用到，而非整站，也可以把這個字放在某個應用到AngularJS的div中(例如:div)。

## ng-model
+ 綁定的動作
<pre><code>
  p My name is {{yourName || 'Anna'}}! p
  label 請輸入你的名字，也和大家自我介紹吧! label
  input type="text" ng-model="yourName" 
</code></pre>
## ng-controller
+ 用來綁定view(html)和model(js)的連結。
+ 使用ng-controller，建立view和model的關係
<pre><code>
  body ng-controller="TodoCrtl"
</code></pre>
+ 指定名稱為"TodoCrtl"的controller，必須與controllers.js裡的主function名稱相同
+ 在model裡面指定變數name的方式為$scope.name，view再透過{{ name }}顯示。

## $scope
+ scope是AngularJS在建立(controller)應用程式時，會產生一個物件，用來代表應用程式的Model。所以我們透過$scope.變數，才能得到變數的(值)位址。
<pre><code>
  function TodoCrtl($scope) { 
    $scope.name = "Anna";
  }
  p ng-controller="TodoCrtl">My name is {{ name }}! p
</code></pre>

## ng-click
<pre><code>
  input type="text" ng-model="price" 
  
  $scope.action = function () {
    $scope.price = 100;
  };
  
  input type="button" value="Click" ng-click="action()"
</code></pre>
## ng-show/ng-hide
+ 顯示: 欲顯示的文字
+ 隱藏: 欲隱藏的文字
+ 判斷是否要顯示

## ng-init 
+ model一開始載入，會先執行ng-init，我們可以利用ng-init設定初始值  
<pre><code>
  div ng-init="greeting='Hello'; person='World'"
    {{greeting}} {{person}}!
  div
</code></pre>

## ng-repeat
+ 透過ng-repeat指令，從陣列中取出每一個item的內容。
+ $index –{number} –取出陣列中的index。(從0開始)
+ $first –{boolean} –如果是第一個項目，就傳回true、否則為false。 
+ $middle –{boolean} –如果不是第一個和最後一個項目，就傳回true、否則為false。 
+ $last –{boolean} –如果是最後一個項目，就傳回true、否則為false。

## 其他參考函示庫(圖表)
+ [Charts.js](http://www.chartjs.org/ "Charts.js")
+ [Morris.js](http://morrisjs.github.io/morris.js/index.html "Morris.js")

