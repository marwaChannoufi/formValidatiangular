var myApp =angular.module('myApp',[])

 
myApp.controller('formController',['$scope', ($scope)=>{
    
   $scope.registre=()=>{
        
       $scope.msg="welcome"+$scope.user.firstName+' '+$scope.user.lastName+'!'+'\n'+'you signed in successfully'
   }
}])

