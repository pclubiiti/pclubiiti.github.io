WeeklyChallenges=[
    {
      date:"Current Week",
      items:[
  
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
      ]
    },
    {
      date:'Last Week',
     items:[
      {
        title:"Error Minimisation",
        subtitle:"Find the parameters so that the error is minimised",
        author:"Arjun Srivastava",
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
     ]
    },
  ]


  var weeklychalWCP = new Vue({
    el: '#weeklychalWCP',
    data: {
      items:WeeklyChallenges
    }
  });
  
  var weeklychalmodalWCP = new Vue({
    el: '#weeklychalmodalWCP',
    data: {
      items:WeeklyChallenges
    }
  });  
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
  