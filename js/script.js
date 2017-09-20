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

WeeklyChallenges=[
  
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
          author:"Arjun Srivastava",
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
      ];

var Header = new Vue({
  el: 'header',
  data: {
    title: 'The Programming club',
    subtitle: 'Indian Institute of Technology, Indore'
  }
});

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



var weeklychal = new Vue({
  el: '#weeklychal',
  data: {
    items:WeeklyChallenges
  }
})

var weeklychalmodal = new Vue({
  el: '#weeklychalmodal',
  data: {
    items:WeeklyChallenges
  }
})


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
        href:'/blog'
      },
      {
        title:'About',
        href:'about.html'
      },

    ]
  }

});

var Footer = new Vue({
  el: 'footer',
  data: {
    location: 'Indian Institute of Technology <br> Indore',
    copyright: 'Copyright &copy; Daemon Labs 2017',
    items: [
      {
        link: 'mailto:progclub@iiti.ac.in',
        icon: 'fa fa-fw fa-envelope'
      },
      {
        link: 'https://www.facebook.com/pclubiiti',
        icon: 'fa fa-fw fa-facebook'
      },
      {
        link: 'https://github.com/DaemonLab',
        icon: 'fa fa-fw fa-github'
      },
      {
        link: 'https://twitter.com/pclubiiti',
        icon: 'fa fa-fw fa-twitter'
      },
    ]
  }
})
