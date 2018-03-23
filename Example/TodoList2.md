# AngularJS

#### Todo List 2
+ 用AngularJS來做待辦事項
+ Filter練習

## Html
+ ng-click 執行removeItem這個事件處理器，參數則是代表自己的item
+ filter 是一個通用型的過濾器，你可以指定字串、物件或函式給它當過濾條件

``` html
<!DOCTYPE html>
  <html ng-app>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
  <body ng-controller="TodoCrtlRemovable">
    <meta charset="utf-8"> 
    <title>邊學AngularJS邊做Todo List </title>
      <h1>Todo List</h1>
      <form ng-submit="addItem()">
        <input type="text" ng-model="newItem" name="newItem" />
        <input type="submit" id="submit" value="新增待辦事項" />
      </form>
      <ul id="todo">
        <li ng-repeat="item in todoList | filter:{isFinish:false}">
          <input type="checkbox" ng-click="removeItem(item)">
          {{item.label }}
        </li>
      </ul>

      <hr>

      <h1>Finished!</h1>  
      <ul id="finish">
        <li ng-repeat="item in todoList | filter:{isFinish:true}">
          {{item.label}}
        </li>
      </ul>
   </body>
  </html>
```

## Js

``` javascript
function TodoCrtlRemovable($scope) {
  $scope.newItem = '';
  $scope.todoList = [];
  $scope.addItem = function(){
    if(this.newItem){
       this.todoList.push({label:this.newItem,isFinish:false});
       this.newItem = '';
    }
  }
  $scope.removeItem = function(item){
      item.isFinish = true;
  }
}

```