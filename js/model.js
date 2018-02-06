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
      /*"id_8": {
    		"course": "",
    		"description": "",
    		"shortDescription": "",
    		"id": 8,
    		"img": "img/2.png",
        "imgAll": [{src: '', alt: ''}],
    		"project": "",
    		"role": "Web developer",
    		"tags": ["VR", "Web development"],
    		"team": "",
    		"title": "Master thesis",
    		"tools": ["Unity", "HTC Vive", "Blender", "C#"],
    		"url": "",
        "open": false
    	},*/
      "id_7": {
    		"course": "",
    		"description": "The Dandelion started out as a visualization of organic food purchases in a research project at KTH, but later evolved into a versitile visualization of a full year that can be mapped to different datasets. <p>My main responsibility during the project was to develop the web based visualization. It's built with HTML, CSS, Javascript and utilizes some aspects of the D3.js library.</p>",
    		"shortDescription": "The Dandelion started out as a visualization of organic food purchases in a research project at KTH, but later evolved into a versitile visualization of a full year that can be mapped to different datasets.",
    		"id": 7,
    		"img": "https://static.tumblr.com/ta26uqw/HUYp3c9x3/dandelion.jpg",
        "imgAll": [{src: '', alt: ''}],
    		"project": "",
    		"role": "Web developer",
    		"tags": ["Visualization", "Web development"],
    		"team": "Gustav Höglund, Tomás Albrecht, Victor Gustafsson",
    		"title": "The Dandelion",
    		"tools": ["HTML", "CSS", "JavaScript", "Git", "D3.js"],
    		"url": "https://emmabckstrm.github.io/dandelion",
        "open": false
    	},
    	"id_8": {
    		"course": "",
    		"description": "<p>Armada is the annual career fair days at KTH, engaging 250 students and invites almost 200 companies and over 10 000 visitors to the fair days.</p><p>I was part of the project team of Armada, and was team leader for four backend developers. I was responsible for the Django based AIS, which is the administrative system which the members of the Armada organization use in their work for the project.</p>",
    		"shortDescription": "During THS Armada, the Career Fair days at KTH, I was ultimately responsible for the Django based administrative system and overseeing the work of four backend developers.",
    		"id": 8,
    		"img": "https://static.tumblr.com/ta26uqw/4XWp3c9we/armada.jpg",
        "imgAll": [],
    		"project": "",
    		"role": "Head of Internal Systems",
    		"tags": ["Web development", "Team leader"],
    		"team": "",
    		"title": "THS Armada",
    		"tools": ["Django", "Python", "HMTL", "CSS", "Git"],
    		"url": "https://github.com/armada-ths/ais",
        "open": false
    	},
    	"id_6": {
    		"course": "DH2321 Information Visualization",
    		"description": "<p>Le Bon Nobel is a visualization project for a course at KTH. The aim of Le Bon Nobel is to visualize Nobel prize laureates throughout history, from a geographical point of view and also give the user the oppurtunity to explore laureates down to an individual level.</p> <p>The project team consisted of a team of eight people with varying programming skills. My role was essentially fullstack, with the main responsibility of working with the data, and interactions with the circular sunburst view.</p>",
    		"shortDescription": "Le Bon Nobel is an information visualization project aiming to visualize Nobel prize laureates throughout history.",
    		"id": 6,
    		"img": "https://static.tumblr.com/ta26uqw/D04p3c9xz/lebonnobel1.png",
        "imgAll": [{src: 'img/lebonnobel1.png', alt: 'Le Bon Nobel'}, {src: 'img/lebonnobel2.jpg', alt: 'Le Bon Nobel'}],
    		"project": "",
    		"role": "Fullstack developer",
    		"tags": ["Information visualization", "Web development"],
    		"team": "Caroline Lönn, Hannes Westberg, Johanna Gustafsson, Maria Westling, Per Jaakonantti, Simóne Stenis Perron, Thomas von Prouss",
    		"title": "Le Bon Nobel",
    		"tools": ["AngularJS", "HTML", "CSS", "JavaScript", "Git"],
    		"url": "https://lebonnobel.github.io/nobel",
        "open": false
    	},
    	"id_5": {
    		"course": "",
    		"description": "<p>Osqledaren is the official paper of the KTH Student Union. During the the autumn and spring 2016/2017 the website frontend was rebuilt from scratch using Angular.</p><p>As frontend developer, my responsibilities consisted of executing the concept design into code, using Angular(2), HTML, SASS, TypeScript.",
    		"shortDescription": "Osqledaren is the official paper of the KTH Student Union. During the the autumn and spring 2016/2017 the website frontend was rebuilt from scratch using Angular.",
    		"id": 5,
    		"img": "https://static.tumblr.com/ta26uqw/pIPp3c9z8/ol2.jpg",
        "imgAll": [{src: 'img/ol1.jpg', alt: ''}, {src: 'img/ol2.jpg', alt: ''}, {src: 'img/ol3.jpg', alt: ''}],
    		"project": "",
    		"role": "Frontend developer",
    		"tags": ["Web development"],
    		"team": "Ah Zau Marang, Simóne Stenis Perron, Tedy Warsitha, Thomas Vakili",
    		"title": "Osqledaren",
    		"tools": ["Angular2", "HTML", "SASS", "TypeScript", "Git"],
    		"url": "http://osqledaren.se/",
        "open": false
    	},
    	"id_4": {
    		"course": "DT2140 Multimodal Interaction and Interfaces",
    		"description": "<p>GhostHuntAR was created within the course Multimodal Interaction and Interfaces at KTH. The core of the course was to explore different modalities to interact with technology, other than mouse and keyboard screen. GhostHuntAR was created with the aim of combining multimodality, augmented reality and playfulness.</p><p>GhostHuntAR is an augmented reality game, where the player is surrounded by ghosts and has to vanquish them to clicking them. However, in order to vanquish the ghosts, they have to be located, which is done by hearing.</p><p>My responsibilities throughout this project included 3D modelling, game design and game development.</p>",
    		"shortDescription": "GhostHuntAR is a smartphone game app, combining multimodality, augmented reality and playfulness. The player has to use their hearing to locate the ghosts.",
    		"id": 4,
    		"img": "https://static.tumblr.com/ta26uqw/SOip3c9zx/ghosthuntar2.jpeg",
        "imgAll": [{src: 'img/ghosthuntar2.jpeg', alt: ''}],
    		"project": "",
    		"role": "Developer & 3D modeller",
    		"tags": ["Game design", "Game development", "AR"],
    		"team": "Maria Westling, Robin Kammerlander, Tedy Warsitha",
    		"title": "GhostHuntAR",
    		"tools": ["Unity", "C#", "Blender", "Vuforia"],
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
    		"description": "<p>The Reception of new Students to the Chapter of Media Technology at KTH is an annual, 6 months long project. The project culminates in a four week act to welcome around 70 new students. During these four weeks, one of the key means of communication with the new students is a membership based website.</p><p>For the 2015 edition of the Reception, the website was completely rebuilt. I combined the roles of web designer and frontend developer, taking full responsibility for the frontend look and functionality of the website. The tools used were Photoshop, HTML, CSS, JavaScript and PHP.",
    		"shortDescription": "During the reception of new students to Chapter of Media technology at KTH, a new website was designed and developed.",
    		"id": 2,
    		"img": "https://static.tumblr.com/ta26uqw/SgPp3ca1w/mtgn2.jpg",
        "imgAll": [{src: 'img/mtgn1.jpg', alt: ''}, {src: 'img/mtgn2.jpg', alt: ''}, {src: 'img/mtgn3.jpg', alt: ''}],
    		"project": "Reception for new students",
    		"role": "Web designer & Frontend developer",
    		"tags": ["Web design", "Web development"],
    		"team": "Arvid Sätterkvist, Marcus Frisell, Viktor Ceder",
    		"title": "MTGN2015",
    		"tools": ["HTML", "CSS", "PHP", "JavaScript", "Git"],
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
