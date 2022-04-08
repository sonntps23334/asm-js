var app = angular.module('myApp',[])
var mycontroller = app.controller('myController',['$scope', function($scope) {
          
          $scope.submitok= false;	
          $scope.employee = {};
          //$scope.employee.type = "sothich1";		
          $scope.submit = function() {
              
              var mssv = $scope.employee.mssv;
              var hoten = $scope.employee.hoten;
              var sex = $scope.employee.sex;
              var birthDay = $scope.employee.birthDay;
              var email = $scope.employee.email;
              var hobby = $scope.employee.hobby;
              var type1 = $scope.employee.type1;
              var type2 = $scope.employee.type2;
              var type3 = $scope.employee.type3;
              var type4 = $scope.employee.type4;
              var note = $scope.employee.note;
              var country = $scope.employee.country;
              

              $scope.submitok= true;
              
        };
        
        $scope.reset = function() {
              
              
              $scope.employee.hoten="";
              $scope.employee.sex="";
              $scope.employee.birthDay="";
              $scope.employee.email="";
              $scope.employee.type1=""
              $scope.employee.type2=""
              $scope.employee.type3=""
              $scope.employee.type4=""
              $scope.employee.hobby="";
              $scope.employee.note="";
              $scope.employee.country="";
              $scope.myForm.$setPristine();

        };
}]);