//service style, probably the simplest one
portfolioApp.service('portfolioService', function() {
    var _this = this;

   _this.number = 0;
   _this.currentTitle = 'g';
   _this.current = {
     "course": "DH2321 Information Visualization",
     "description": "Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.<br/><br/>Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.</br></br>Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.",
     "shortDescription": "Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.",
     "id": 6,
     "img": "img/lebonnobel1.png",
     "project": "",
     "role": "Fullstack developer",
     "tags": "test1",
     "team": "Caroline Lönn, Hannes Westberg, Johanna Gustafsson, Maria Westling, Per Jaakonantti, Simóne Stenis Perron, Thomas von Prouss",
     "title": "Le Bon Nobel",
     "tools": "AngularJS, HTML, CSS, JavaScript, Git",
     "url": "https://lebonnobel.github.io/nobel"
   }

   _this.updateNumber = function() {
      _this.number += 1;
     alert('new number should display ' + _this.number);
   }

    _this.updatePreview = function(id) {
      _this.portfolio[id].open = true;
      _this.current = _this.portfolio[id];
    }

    _this.portfolio = {
      "id_7": {
    		"course": "",
    		"description": "The Dandelion started out as a visualization of organic food purchases in a research project at KTH, but later evolved into a versitile visualization of a full year that can be mapped to different datasets. My main responsibility during the project was to develop the web based visualization. It's built with HTML, CSS, Javascript and utilizes some aspects of the D3.js library.",
    		"shortDescription": "The Dandelion started out as a visualization of organic food purchases in a research project at KTH, but later evolved into a versitile visualization of a full year that can be mapped to different datasets.",
    		"id": 7,
    		"img": "img/dandelion1.png",
        "imgAll": [{src: '', alt: ''}],
    		"project": "",
    		"role": "Web developer",
    		"tags": ["Visualization", "Web development"],
    		"team": "Gustav Höglund, Tomás Albrecht, Victor Gustafsson",
    		"title": "The Dandelion",
    		"tools": "HTML, CSS, JavaScript, Git, D3.js",
    		"url": "https://emmabckstrm.github.io/spoc",
        "open": false
    	},
    	"id_8": {
    		"course": "",
    		"description": "Lorem ipsum petentium efficiantur te eum",
    		"shortDescription": "THS Armada is the Career Fair days at KTH,",
    		"id": 8,
    		"img": "/img/1.png",
        "imgAll": [],
    		"project": "",
    		"role": "Head of Internal Systems",
    		"tags": ["Web development", "Team leader"],
    		"team": "",
    		"title": "THS Armada",
    		"tools": "Django, Python, HMTL, CSS, Git",
    		"url": "https://github.com/armada-ths/ais",
        "open": false
    	},
    	"id_6": {
    		"course": "DH2321 Information Visualization",
    		"description": "<p>Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.</p><p>Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.</p><p>Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.</p>",
    		"shortDescription": "Le Bon Nobel is a information visualization project aiming to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.",
    		"id": 6,
    		"img": "img/lebonnobel1.png",
        "imgAll": [{src: 'img/lebonnobel1.png', alt: 'Le Bon Nobel'}, {src: 'img/lebonnobel2.jpg', alt: 'Le Bon Nobel'}],
    		"project": "",
    		"role": "Fullstack developer",
    		"tags": ["Information visualization", "Web development"],
    		"team": "Caroline Lönn, Hannes Westberg, Johanna Gustafsson, Maria Westling, Per Jaakonantti, Simóne Stenis Perron, Thomas von Prouss",
    		"title": "Le Bon Nobel",
    		"tools": "AngularJS, HTML, CSS, JavaScript, Git",
    		"url": "https://lebonnobel.github.io/nobel",
        "open": false
    	},
    	"id_5": {
    		"course": "",
    		"description": "Lorem ipsum petentium efficiantur te eum",
    		"shortDescription": "Osqledaren is the official paper of the KTH Student Union. During the the autumn and spring 2016/2017 the website was rebuilt from scratch, using the newly released Angular(2).",
    		"id": 5,
    		"img": "img/ol2.jpg",
        "imgAll": [{src: 'img/ol1.jpg', alt: ''}, {src: 'img/ol2.jpg', alt: ''}, {src: 'img/ol3.jpg', alt: ''}],
    		"project": "",
    		"role": "Frontend developer",
    		"tags": ["Web development"],
    		"team": "Ah Zau Marang, Simóne Stenis Perron, Tedy Warsitha, Thomas Vakili",
    		"title": "Osqledaren",
    		"tools": "Angular2, HTML, SASS, TypeScript, Git",
    		"url": "",
        "open": false
    	},
    	"id_4": {
    		"course": "DT2140 Multimodal Interaction and Interfaces",
    		"description": "Lorem ipsum petentium efficiantur te eum",
    		"shortDescription": "GhostHuntAR was a project for a course at KTH, consisting of an AR game app.",
    		"id": 4,
    		"img": "img/ghosthuntar2.jpeg",
        "imgAll": [{src: 'img/ghosthuntar2.jpeg', alt: ''}],
    		"project": "",
    		"role": "Developer & 3D modeller",
    		"tags": ["Game design", "Game development", "AR"],
    		"team": "Maria Westling, Robin Kammerlander, Tedy Warsitha",
    		"title": "GhostHuntAR",
    		"tools": "Unity, C#, Blender, Vuforia",
    		"url": "",
        "open": false
    	},
    	/*"id_3": {
    		"course": "",
    		"description": "Lorem ipsum petentium efficiantur te eum",
    		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
    		"id": 3,
    		"img": "img/2.png",
        "imgAll": [{src: '', alt: ''}],
    		"project": "",
    		"role": "Fronted developer",
    		"tags": ["test1"],
    		"team": "",
    		"title": "EggHunt",
    		"tools": "",
    		"url": "",
        "open": false
    	},*/
    	"id_2":{
    		"course": "",
    		"description": "During the reception of new students to Chapter of Media technology at KTH, a new website was designed and developed.",
    		"shortDescription": "During the reception of new students to Chapter of Media technology at KTH, a new website was designed and developed.",
    		"id": 2,
    		"img": "img/mtgn1.jpg",
        "imgAll": [{src: 'img/mtgn1.jpg', alt: ''}, {src: 'img/mtgn2.jpg', alt: ''}, {src: 'img/mtgn3.jpg', alt: ''}],
    		"project": "Reception for new students",
    		"role": "UI designer & Frontend developer",
    		"tags": ["Web design", "Web development"],
    		"team": "Arvid Sätterkvist, Marcus Frisell, Viktor Ceder",
    		"title": "MTGN2015",
    		"tools": "HTML, CSS, PHP, JavaScript, Git",
    		"url": "",
        "open": false
    	}/*,
    	"id_1": {
    		"course": "",
    		"description": "Lorem ipsum petentium efficiantur te eum",
    		"shortDescription": "Lorem ipsum petentium efficiantur te eum",
    		"id": 1,
    		"img": "img/2.png",
        "imgAll": [{src: '', alt: ''}],
    		"project": "",
    		"role": "UX designer & Frontend developer",
    		"tags": ["test1"],
    		"team": "",
    		"title": "Riverbell themes",
    		"tools": "",
    		"url": "",
        "open": false
    	}*/
    };




     return _this;
});
