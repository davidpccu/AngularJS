# AngularJS

#### Todo List 1
+ 用AngularJS來做待辦事項

## Html
+ ng-app 讓AngularJS可以辨識出這是一個AngularJS的應用程式
+  ng-controller 用一個函式來代表，名為TodoCrtl，把它和view繫連起來
+ AngularJS在建立應用程式時，會產生一個物件，用來代表應用程式的Model，而這個Model就是上面Controller注入的 $scope。
+ Model可以在Controller中進行處理，另外有什麼異動時，也會反應到view中
+ ng-model 指定給<input>，這樣我們就把view和model作好
+ ng-submit 送出表單時，去執行 addItem 這個函式

``` html
<!DOCTYPE html>
  <html ng-app>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
  <body ng-controller="TodoCrtl">
    <meta charset="utf-8"> 
    <title>邊學AngularJS邊做Todo List </title>
      <h1>Todo List</h1>
      <form ng-submit="addItem()">
        <input type="text" ng-model="newItem" name="newItem" />
        <input type="submit" id="submit" value="新增" />
      </form>
      <ul>
        <li ng-repeat="item in todoList">{{item.label}}</li>
      </ul>
   </body>
  </html>
```

## Js

``` javascript
function TodoCrtl($scope) {
  $scope.newItem = "";
  $scope.todoList = [{ label: "買牛奶" }, { label: "繳電話費" }];
  $scope.addItem = function() {
       if(this.newItem) {
           this.todoList.push({label:this.newItem});
           this.newItem = "";
       }    
  }
}

```