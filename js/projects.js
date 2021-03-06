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
  