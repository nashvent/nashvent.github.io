let aboutMe = new Vue({
  el: "#fh5co-about",
  data: {
    informationList: [
      {
        field: "Nombre completo",
        data: "Anibal Ignacio Ventura Arocutipa",
      },
      {
        field: "Telefono",
        data: "+51 943434338",
      },
      {
        field: "Email",
        data: "anibalventura123@gmail.com",
      },
    ],
  },
});

let experienceVue = new Vue({
  el: "#fh5co-resume",
  data: {
    workExperiences: [
      {
        date: "Feb 2018 a Feb 2019",
        company: "Centinela Software & Infrastructure",
        position: "Full Stack Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Nov 2019 a Ene 2021",
        company: "Shellcatch Inc.",
        position: "React Native Developer & Full Stack Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Dic 2020 a May 2021",
        company: "Beetle Craft",
        position: "React Native Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Ene 2021 a la actualidad",
        company: "Medlink.la",
        position: "Full Stack Developer",
        location: "Lima, Peru",
      },
    ],
  },
  computed: {
    reverseExperiences() {
      return this.workExperiences.slice().reverse();
    },
  },
});


let skills = new Vue({
  el: "#fh5co-skills",
  data: {
    skills: [
      {
        title: "Python",
        percentage: "60"
      },
      {
        title: "Javascript",
        percentage: "90"
      },
      {
        title: "PHP",
        percentage: "90"
      },
      {
        title: "Laravel",
        percentage: "90"
      },
      {
        title: "Worpdress",
        percentage: "60"
      },
      {
        title: "VueJs",
        percentage: "80"
      },
      {
        title: "ReactJs",
        percentage: "70"
      },
      {
        title: "React Native",
        percentage: "90"
      },
      
      {
        title: "NodeJs",
        percentage: "65"
      }
    ]
  },
  methods: {
    randomInteger: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomClass: function () {
      const classes = ["progress-bar-1", "progress-bar-2", "progress-bar-3", "progress-bar-4", "progress-bar-5", "progress-bar-striped" ];
      return classes[this.randomInteger(0, classes.length-1)];
    }
  }
});