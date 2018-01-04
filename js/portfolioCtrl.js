// Define the `PhoneListController` controller on the `phonecatApp` module
portfolioApp.controller('portfolioController', ['$scope', 'portfolioService', function PortfolioController($scope, portfolioService) {

  $scope.currentTitle = 'yo';
  $scope.ps = portfolioService;
  $scope.number = $scope.ps.number;
  $scope.openPopup = false;

  $scope.testFunc = function(t) {
    $scope.ps.currentTitle = t;
    console.log(t, $scope.ps.portfolio.id_6.title);
  }

  $scope.updatePreview = function(id) {
    var s = "id_";
    s += String(id);
    console.log(s);
    $scope.openPopup = true;
    $scope.ps.updatePreview(s);
  }

  $scope.closePopup = function() {
    $scope.openPopup = false;
  }

  $scope.updateNumber = function() {
    $scope.ps.updateNumber();
  }


}]);
