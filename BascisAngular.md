# AngularJS

## html ng-app 
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

##Animates
Syntax: 
<pre><code>.animate( properties [, duration ] [, easing ] [, complete ] )</code></pre>
EX.
<pre><code>
$('#message').animate(
{  left: '650px',   opacity: 0.5,  fontSize: '24px'  },  1500
);
</code></pre>

##Easings
+ jQuery can only use 'swing' or 'linear' effect
+ jQuery-UI have a lot more choices:[Easings](http://easings.net/zh-tw "Easings")
+ 參考範例 carousel


## 其他參考函示庫(圖表)
+ [Charts.js](http://www.chartjs.org/ "Charts.js")
+ [Morris.js](http://morrisjs.github.io/morris.js/index.html "Morris.js")

