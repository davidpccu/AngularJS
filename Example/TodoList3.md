# AngularJS

#### Todo List 3
+ 用AngularJS來做待辦事項
+ 增刪改練習
+ 設計這個修改功能時，第一直覺的想法是用jQuery，怎麼用AngularJS的思維來設計修改功能?
+ 合理的想法是，進入編輯模式時，原本的待辦事項的DOM藏起來，出現的是可編輯的待辦事項。編輯模式結束後，兩個的顯示狀態再交換回來

## Html
+ ng-show/ng-hide 符合某運算式時，讓元素出現就消失
+ 兩個指令同樣指向item的屬性editing，當editing為真時，第一行會藏起來
+ 進入編輯模式：利用ng-dblclick指令，在double click的時後，用”edit(item)”來進入編輯模式。
+ 結束編輯模式：利用按下儲存按鈕時，ng-click觸發”save(item)”，來結束編輯模式。
+ AngularJS是雙向綁定資料，編輯框加上ng-model=”item.label”之後，它就知道這文字框裡面的資料是和item的label綁定的

``` html
<!DOCTYPE html>
  <html ng-app>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
  <body ng-controller="TodoCrtlUpdate">
    <meta charset="utf-8"> 
    <title>邊學AngularJS邊做Todo List </title>
      <h1>Todo List</h1>
      <form ng-submit="addItem()">
        <input type="text" ng-model="newItem" name="newItem" />
        <input type="submit" id="submit" value="新增待辦事項" />
      </form>
      <ul id="todo">
        <li ng-repeat="item in todoList | filter:{isFinish:false}">
          <div ng-hide="item.editing"><input type="checkbox" ng-click="removeItem(item)"><span ng-dblclick="edit(item)">{{item.label }}</span></div>
          <div ng-show="item.editing"><input type="text" value="{{item.label }}" ng-model="item.label"><button ng-click="save(item)">儲存</button></div>
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

+ edit函式其實是為item加上editing的屬值，並給它true的值，一旦賦值之後，因為資料狀態異動，外觀的ng-show、ng-hide馬上會被觸發
+ save函式作的則是相反的動作，編輯完成後，我們不需要editing這個多餘的屬性來干擾原來的資料結構，於是就用javascript的delete的語法，刪去item物件的editing屬性

``` javascript

function TodoCrtlUpdate($scope) {
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

  $scope.edit = function(item){
      item.editing = true;
  }

  $scope.save = function(item){
    delete item.editing;
  }
}

```