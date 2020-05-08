var app=angular.module('todo',[]);

app.controller('todoApp',function($scope){
  $scope.tasks=[];

  var taskdata = localStorage['taskList'];

  if(taskdata!==undefined)
  {
    $scope.tasks=JSON.parse(taskdata);
  }

    $scope.searchEnter=function(){
      if(event.which==13 && $scope.task!="")
      {
        $scope.addTask();
      }
    };

    $scope.addTask=function()
    {
        $scope.tasks.push({'taskMessage':$scope.task, 'status':false});
        console.log($scope.tasks);
        $scope.task="";
        localStorage['taskList']=JSON.stringify($scope.tasks);
        console.log(localStorage);
    };
    $scope.contentEdit=function(msg){

      for(var i=0;i<$scope.tasks.length;i++)
      {
        if($scope.tasks[i].taskMessage==msg)
        {
          $scope.tasks[i].taskMessage=event.target.innerText;
        }
      }
      console.log($scope.tasks);
      localStorage['taskList']=JSON.stringify($scope.tasks);

      event.target.contentEditable=event.target.contentEditable=='false'?'true':'false';
    };
    $scope.enterAgain=function(msg)
    {
      if(event.which==13 && msg!="")
      {
        $scope.contentEdit(msg);
      }
    };
});
