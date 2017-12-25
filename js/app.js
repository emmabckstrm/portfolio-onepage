// Define the `phonecatApp` module
var portfolioApp = angular.module('portfolioApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
portfolioApp.controller('portfolioController', function PortfolioController($scope) {
  $scope.portfolio = [
  	{
  		"course": "",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "THS Armada is the Career Fair days at KTH,",
  		"id": 8,
  		"img": "/img/1.png",
  		"project": "",
  		"role": "Head of Internal Systems",
  		"tags": "test1",
  		"team": "",
  		"title": "THS Armada",
  		"tools": "Django, Python, HMTL, CSS, Git",
  		"url": "https://github.com/armada-ths/ais"
  	},
  	{
  		"course": "",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
  		"id": 7,
  		"img": "img/spoc.png",
  		"project": "",
  		"role": "Web developer",
  		"tags": "test1",
  		"team": "Gustav Höglund, Tomás Albrecht, Victor Gustafsson",
  		"title": "SPOC",
  		"tools": "HTML, CSS, JavaScript, Git, D3js",
  		"url": "https://emmabckstrm.github.io/spoc"
  	},
  	{
  		"course": "DH2321 Information Visualization",
  		"description": "Lorem ipsum petentium efficiantur te eum. Le Bon Nobel is a project for the course DH2321 Information Visualization at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level. Le Bon Nobel is a project for the course DH2321 Information Visualization at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level. Le Bon Nobel is a project for the course DH2321 Information Visualization at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level. Le Bon Nobel is a project for the course DH2321 Information Visualization at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity<br/> to explore laureates down to an individual level.",
  		"shortDescription": "Le Bon Nobel is a project for the course DH2321 Information Visualization at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.",
  		"id": 6,
  		"img": "img/lebonnobel1.png",
  		"project": "",
  		"role": "Fullstack developer",
  		"tags": "test1",
  		"team": "Caroline Lönn, Hannes Westberg, Johanna Gustafsson, Maria Westling, Per Jaakonantti, Simóne Stenis Perron, Thomas von Prouss",
  		"title": "Le Bon Nobel",
  		"tools": "AngularJS, HTML, CSS, JavaScript, Git",
  		"url": "https://lebonnobel.github.io/nobel"
  	},
  	{
  		"course": "",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "Osqledaren is the official paper of the KTH Student Union. During the the autumn and spring 2016/2017 the website was rebuilt from scratch, using the newly released Angular(2).",
  		"id": 5,
  		"img": "img/ol-logo.png",
  		"project": "",
  		"role": "Frontend developer",
  		"tags": "test1",
  		"team": "Ah Zau Marang, Simóne Stenis Perron, Tedy Warsitha, Thomas Vakili",
  		"title": "Osqledaren",
  		"tools": "Angular2, HTML, SASS, TypeScript, Git",
  		"url": ""
  	},
  	{
  		"course": "DT2140 Multimodal Interaction and Interfaces",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
  		"id": 4,
  		"img": "img/ghosthuntar.PNG",
  		"project": "",
  		"role": "Developer",
  		"tags": "test1",
  		"team": "Maria Westling, Robin Kammerlander, Tedy Warsitha",
  		"title": "GhostHuntAR",
  		"tools": "",
  		"url": ""
  	},
  	{
  		"course": "",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
  		"id": 3,
  		"img": "img/2.png",
  		"project": "",
  		"role": "Fronted developer",
  		"tags": "test1",
  		"team": "",
  		"title": "EggHunt",
  		"tools": "",
  		"url": ""
  	},
  	{
  		"course": "",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
  		"id": 2,
  		"img": "img/mtgn1.png",
  		"project": "Reception for new students",
  		"role": "UX designer & Fronted developer",
  		"tags": "test1",
  		"team": "Arvid Sätterkvist, Marcus Frisell, Viktor Ceder",
  		"title": "Mtgn2015",
  		"tools": "HTML, CSS, PHP, JavaScript, Git",
  		"url": ""
  	},
  	{
  		"course": "",
  		"description": "Lorem ipsum petentium efficiantur te eum",
  		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
  		"id": 1,
  		"img": "img/2.png",
  		"project": "",
  		"role": "UX designer & Fronted developer",
  		"tags": "test1",
  		"team": "",
  		"title": "Riverbell themes",
  		"tools": "",
  		"url": ""
  	}
  ];

});
