// Define the `PhoneListController` controller on the `phonecatApp` module
portfolioApp.controller('portfolioController', ['$scope', '$interval', 'portfolioService', function PortfolioController($scope, $interval, portfolioService) {

  $scope.currentId = '';
  $scope.ps = portfolioService;
  $scope.number = $scope.ps.number;
  $scope.openPopup = false;

  /*  SLIDER TRANSITIONS ==========================
  *
  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,2500);

  function nextSlide(){
  	slides[currentSlide].className = 'slide';
  	currentSlide = (currentSlide+1)%slides.length;
  	slides[currentSlide].className = 'slide showing';
  }*/

  $scope.collection = ["Web developer", "Plant lover"];

  $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

  $scope.itemClicked = function ($index) {
    console.log($index);
    $scope.selectedIndex = $index;
  };

  /*$interval(function() {
    if ($scope.selectedIndex < $scope.collection.length-1) {
      $scope.selectedIndex = $scope.selectedIndex + 1;
    } else {
      $scope.selectedIndex = 0;
    }

  }, 2500);*/


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
