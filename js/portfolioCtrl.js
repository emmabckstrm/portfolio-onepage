// Define the `PhoneListController` controller on the `phonecatApp` module
portfolioApp.controller('portfolioController', ['$scope', 'portfolioService', function PortfolioController($scope, portfolioService) {

  $scope.currentId = '';
  $scope.ps = portfolioService;
  $scope.number = $scope.ps.number;
  $scope.openPopup = false;



  $scope.testFunc = function(t) {
    $scope.ps.currentTitle = t;
    console.log(t, $scope.ps.portfolio.id_6.title);
  }

  $scope.updatePreview = function(id) {
    $scope.currentId = "id_";
    $scope.currentId  += String(id);
    console.log("hello2", $scope.currentId);
    $scope.openPopup = true;
    $scope.ps.updatePreview($scope.currentId);
  }

  $scope.closePopup = function(id) {
    $scope.ps.portfolio[id].open = false;
    $scope.currentId = '';
    $scope.openPopup = false;
  }

  $scope.updateNumber = function() {
    $scope.ps.updateNumber();
  }


}]);
