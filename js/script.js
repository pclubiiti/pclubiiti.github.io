(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

var Header = new Vue({
  el: 'header',
  data: {
    title: 'The Programming club',
    subtitle: 'Indian Institute of Technology, Indore'
  }
});

HomePageItems =  [
  { 
    image: 'img/project/game1.png',
    imagealt: 'game1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Infinite Runner',
    content: 'The game is an infinite runner with the main objective of collecting as many bananas as possible. The game uses Unity Engine.',
    github: 'https://github.com/sreevatsank1999/Project_M',
    date: '21st july 2017', 
    domain: 'Game Development',  
  },
  { 
    image: 'img/project/web1.svg',
    imagealt: 'web1',
    modalhref: '#projectModal2',
    modalhreftitle: 'projectModal2',
    title: 'Q and A forum',
    content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
    github: 'https://github.com/Mohit-Nathrani/question-answer-site',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/software1.svg',
    imagealt: 'software1',
    modalhref: '#projectModal3',
    modalhreftitle: 'projectModal3',
    title: 'Rave Media Player',
    content: 'A media player with an intuitive media library management capabilities built on Python and Qt.',
    github: 'https://github.com/kanishkarj/rave',
    date: '21st july 2017', 
    domain: 'Software Development', 
  },
];

Headmembers = [
  {
    image:"img/members/vineetshah.jpe",
    imagealt:"vineetshah",
    name:"Vineet Shah",
    link:"#"
  },
  {
    image:"img/members/mohitmohta.jpg",
    imagealt:"mohitmohta",
    name:"Mohit Mohta",
    link:"#"
  },
  {
    image:"img/members/kunalgupta.jpeg",
    imagealt:"kunalgupta",
    name:"Kunal Gupta",
    link:"#"
  },
  {
    image:"img/members/adityajain.jpe",
    imagealt:"adityajain",
    name:"Aditya Jain",
    link:"#"
  },
  
];

WeeklyChallenges=[
  {
    date:"11th sept 2017",
    items:[
      {
        title:"Error Minimisation",
        subtitle:"Find the parameters so that the error is minimised",
        author:"Arjun Srivastav",
        modalhref: '#weeklychalModal1',
        modalhreftitle: 'weeklychalModal1',
        content:"Sam finds a mysterious box which upon shaking gives two numbers X and Y.Sam finds a mysterious box which upon shaking gives two numbers X and Y.Sam feels that the two numbers are (approximately) linearly related by Y=m*X+c.Your job is to find m and c such that the error between predicted Y and the real Y is minimised.The error on one example is given by (Y-m*X+c)^2 , total error is the sum of the individual errors.",
      },
      {
        title:"Pythagorean Triplets",
        subtitle:"Print all the Pythagorean Triplets less than N",
        author:"Varun Patil",
        modalhref: '#weeklychalModal2',
        modalhreftitle: 'weeklychalModal2',
        content:"Print all Pythagorean triplets with sides less than a number N.Take N from user.Ask whether user wants only refined triplets or all triplets and print accordingly. (Refined triplets meaning 6,8,10 or 9,12,15 etc wont be counted because they are an integer multiple of 3,4,5.ie integer multiples of Base triplets should not be printed)",
      },
      {
        title:"Web Console",
        subtitle:"Hello, Friends",
        author:"Mrigank Krishnan",
        modalhref: '#weeklychalModal3',
        modalhreftitle: 'weeklychalModal3',
        content:"Here is a simple problem to introduce you guys to the 'console'.<br>Press F12 on your keyboard to open 'Developer Tools and start exploring...<br> You have to find the correct password.<br><br><div class='col-lg-8 mx-auto text-center'><a href='chal_files/W1_Q1.html' class='btn btn-lg btn-info'><i class='fa fa-code'></i>Proceed</a></div>",
      },
      {
        title:"Predicting Cancer",
        subtitle:"Predict whether a new example is malignant or not",
        author:"Arjun Srivastav",
        modalhref: '#weeklychalModal4',
        modalhreftitle: 'weeklychalModal4',
        content:"As this is the first week of our weekly questions series.We thought we would start with something easy, Predicting Cancer.Head over <a href= 'https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)'>[here]</a> to read about the dataset you would use.You should write code to predict wether a  new example is malignant or not.You can submit a Jupyter Notebook for the same. the winners would be decide next sunday.Happy Learning.Things to google: sklearn trees, train and test data, jupyter notebook, pandas, numpy.dataset",
      },
      {
        title:"Web Console, again",
        subtitle:"Some more Exploration.",
        author:"Mrigank Krishnan",
        modalhref: '#weeklychalModal5',
        modalhreftitle: 'weeklychalModal5',
        content:"Now you'll have to make use of breakpoints to crack this one..<br><br> <div class='col-lg-8 mx-auto text-center'><a href='chal_files/W1_Q2.html' class='btn btn-lg btn-info'><i class='fa fa-code'></i>Proceed</a></div>",
      },
    ]
  },
  {
   
  },
]

members = [
  {
    image:"img/members/vineetshah.jpe",
    imagealt:"vineetshah",
    name:"Vineet Shah",
    domain:"Competitive Coding",
    desig:"BTech 3rd Year",
    link:"google.com"
  },
  {
    image:"img/members/mohitmohta.jpg",
    imagealt:"mohitmohta",
    name:"Mohit Mohta",
    domain:"Software Development",
    desig:"BTech 3rd Year",
    link:"#"
  },
  {
    image:"img/members/kunalgupta.jpeg",
    imagealt:"kunalgupta",
    name:"Kunal Gupta",
    domain:"Web Security",
    desig:"BTech 3rd Year",
    link:"#"
  },
  {
    image:"img/members/adityajain.jpe",
    imagealt:"adityajain",
    name:"Aditya Jain",
    domain:"Machine Learning",
    desig:"BTech 3rd Year",
    link:"#"
  },
  {
    image:"img/members/blank.png",
    imagealt:"rohit_ranjan",
    name:"Rohit Ranjan",
    domain:"Competitive Programming",
    desig:"BTech 3rd Year",
    link:"#"
  },
  {
    image:"img/members/tapish_singh.jpeg",
    imagealt:"tapish_singh",
    name:"Tapish Singh",
    domain:"Competitive Programming",
    desig:"BTech 3rd Year",
    link:"#"
  },
    {
    image:"img/members/bhor_verma.jpg",
    imagealt:"bhor_verma",
    name:"Bhor Verma",
    domain:"Cyber Security",
    desig:"BTech 3nd Year",
    link:"#"
  },
  {
    image:"img/members/ankit_gaur.jpg",
    imagealt:"ankit_gaur",
    name:"Ankit Gaur",
    domain:"Android App Development",
    desig:"BTech 3rd Year",
    link:"#"
  },
  {
    image:"img/members/blank.png",
    imagealt:"kumar_abhinav",
    name:"Kumar Abhinav",
    domain:"Competitive Coding",
    desig:"BTech 2nd Year",
    link:"#"
  },
  {
    image:"img/members/blank.png",
    imagealt:"gvs_akhil",
    name:"GVS Akhil",
    domain:"Competitive Programming",
    desig:"BTech 2nd Year",
    link:"#"
  },
  {
    image:"img/members/mohit_nathrani.jpg",
    imagealt:"mohit_nathrani",
    name:"Mohit Nathrani",
    domain:"Web Development and Competitive Programming",
    desig:"BTech 2nd Year",
    link:"#"
  },
  {
    image:"img/members/ashutosh_bang.JPG",
    imagealt:"ashutosh_bang",
    name:"Ashutosh Bang",
    domain:"Competitive Programming",
    desig:"BTech 2nd Year",
    link:"#"
  },
  {
    image:"img/members/joshi_niranjan.jpg",
    imagealt:"joshi_niranjan",
    name:"Joshi Niranjan",
    domain:"Web and Software Development",
    desig:"BTech 2nd Year",
    link:"#"
  },
  
  {
    image:"img/members/daanish_mahajan.jpg",
    imagealt:"daanish_mahajan",
    name:"Daanish Mahajan",
    domain:"Competitive Programming",
    desig:"BTech 2nd Year",
    link:"#",
  }, 
  {
    image:"img/members/kanishkarj.jpe",
    imagealt:"kanishkarj",
    name:"Kanishkar J",
    domain:"Full Stack Development",
    desig:"BTech 2nd Year",
    link:"https://github.com/kanishkarj",
  },
  {
    image:"img/members/saksham_tanwar.jpg",
    imagealt:"saksham_tanwar",
    name:"Saksham Tanwar",
    domain:"Competitive Programming",
    desig:"BTech 1st Year",
    link:"#"
  },
  
  {
    image:"img/members/vishnunarayan.jpg",
    imagealt:"vishnunarayan",
    name:"Vishnunarayan K I",
    domain:"Competitive Programming",
    desig:"BTech 1st Year",
    link:"#",
  },  {
    image:"img/members/sparsh_bansal.jpg",
    imagealt:"sparsh_bansal",
    name:"Sparsh Bansal",
    domain:"Competitive Coding",
    desig:"BTech 1st Year",
    link:"#"
  },
  {
    image:"img/members/mrigank_krishan.jpg",
    imagealt:"mrigank_krishan",
    name:"Mrigank Krishan",
    domain:"Web Development",
    desig:"BTech 1st Year",
    link:"#"
  },
  {
    image:"img/members/divyansh_choudhary.JPG",
    imagealt:"divyansh_choudhary",
    name:"Divyansh Choudhary",
    domain:"Competitive Programming",
    desig:"BTech 1st Year",
    link:"#"
  },
  {
    image:"img/members/varun_patil.jpg",
    imagealt:"varun_patil",
    name:"Varun Patil",
    domain:"Competitive Programming",
    desig:"BTech 1st Year",
    link:"#"
  },
   
  
  {
    image:"img/members/blank.png",
    imagealt:"pratik_jain",
    name:"Pratik Jain",
    domain:"Competitive Programming",
    desig:"BTech 1st Year",
    link:"#"
  },
  {
    image:"img/members/blank.png",
    imagealt:"vandan_agarwal",
    name:"Vandan Agarwal",
    domain:"Competitive Programming",
    desig:"BTech 1st Year",
    link:"#"
  },
  {
    image:"img/members/blank.png",
    imagealt:"aneesh_nema",
    name:"Aneesh Nema",
    domain:"Development",
    desig:"BTech 1st Year",
    link:"#",
  },  
  
];

ProjectPageItems =  [
  { 
    image: 'img/project/game1.png',
    imagealt: 'game1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Infinite Runner',
    content: 'The game is an infinite runner with the main objective of collecting as many bananas as possible. The game uses Unity Engine.',
    github: 'https://github.com/sreevatsank1999/Project_M',
    date: '21st july 2017', 
    domain: 'Game Development', 
  },
  { 
    image: 'img/project/web1.svg',
    imagealt: 'web1',
    modalhref: '#projectModal2',
    modalhreftitle: 'projectModal2',
    title: 'Q and A forum',
    content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
    github: 'https://github.com/Mohit-Nathrani/question-answer-site',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/software1.svg',
    imagealt: 'software1',
    modalhref: '#projectModal3',
    modalhreftitle: 'projectModal3',
    title: 'Rave Media Player',
    content: 'A media player with an intuitive media library management capabilities built on Python and Qt.',
    github: 'https://github.com/kanishkarj/rave',
    date: '21st july 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/web2.svg',
    imagealt: 'web1',
    modalhref: '#projectModal4',
    modalhreftitle: 'projectModal4',
    title: 'Local Quora',
    content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
    github: 'https://github.com/Harsh860/IITI-SOC',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/web3.svg',
    imagealt: 'web3',
    modalhref: '#projectModal5',
    modalhreftitle: 'projectModal5',
    title: 'Query',
    content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
    github: 'https://github.com/kpranav1998/soc-project',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/software2.svg',
    imagealt: 'Software2',
    modalhref: '#projectModal6',
    modalhreftitle: 'projectModal6',
    title: 'Javafx Media Player',
    content: 'Music player built using JavaFX stylized using CSS sheets. The player can be used to pause/play and reload songs.',
    github: 'https://github.com/eltoro007/MediaPlayer',
    date: '21st july 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/ml1.svg',
    imagealt: 'ml1',
    modalhref: '#projectModal7',
    modalhreftitle: 'projectModal7',
    title: 'Computer learns to play mario.',
    content: 'A machine learning algorithm that successfully learns to play Super Mario 64, after learning from test runs played by us.',
    github: 'https://github.com/Mohit-Nathrani/question-answer-site',
    date: '21st july 2017', 
    domain: 'Machine Learning', 
  },
];

var mainNav = new Vue({
  el: '#mainNav',
  data: {
    header: 'The Programming club',
    items: [
      { 
        title:'Projects',
        href:'projects.html' 
      },
      { 
        title:'Weekly Challenges',
        href:'weekly-chal.html' 
      },
      { 
        title:'Blog',
        href:'#blog' 
      },
      { 
        title:'About',
        href:'about.html' 
      },
     
    ]
  }
  
});
var About = new Vue({
  el: '#about',
  data: {
    header: 'About',
    members: Headmembers
  }
})

var AboutList = new Vue({
  el: '#aboutlist',
  data: {
    header: 'About',
    members: members
  }
})

var Project = new Vue({
  el: '#project',
  data: {
    items:HomePageItems
  }
})

var ProjectModal = new Vue({
  el: '#projectmodal',
  data: {
    items:HomePageItems
  }
})

var ProjectPP = new Vue({
  el: '#projectPP',
  data: {
    items:ProjectPageItems
  }
})

var ProjectModalPP = new Vue({
  el: '#projectmodalPP',
  data: {
    items:ProjectPageItems
  }
})

var weeklychal = new Vue({
  el: '#weeklychal',
  data: {
    items:WeeklyChallenges[0].items
  }
})

var weeklychalmodal = new Vue({
  el: '#weeklychalmodal',
  data: {
    items:WeeklyChallenges[0].items
  }
})

var weeklychalWCP = new Vue({
  el: '#weeklychalWCP',
  data: {
    items:WeeklyChallenges
  }
})

var weeklychalmodalWCP = new Vue({
  el: '#weeklychalmodalWCP',
  data: {
    items:WeeklyChallenges
  }
})

var Footer = new Vue({
  el: 'footer',
  data: {
    location: 'Indian Institute of Technology <br> Indore',
    copyright: 'Copyright &copy; Daemon Labs 2017',
    items: [
      { 
        link: 'https://www.facebook.com/groups/485116264850626/',
        icon: 'fa fa-fw fa-facebook' 
      },
      { 
        link: 'mailto:progclub@iiti.ac.in',
        icon: 'fa fa-fw fa-envelope' 
      },
      { 
        link: 'https://github.com/DaemonLab',
        icon: 'fa fa-fw fa-github' 
      },
    ]
  }
})