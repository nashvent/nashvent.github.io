let aboutMe = new Vue({
  el: "#fh5co-about",
  data: {
    informationList: [
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
        position: "Fullstack Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Jul 2019 a Nov 2019",
        company: "Shellcatch Inc.",
        position: "Python Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Nov 2019 a Oct 2020",
        company: "Shellcatch Inc.",
        position: "React Native Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Oct 2020 a Dic 2020",
        company: "Shellcatch Inc.",
        position: "React Native Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Dic 2020 a May 2021",
        company: "Beetle Craft",
        position: "Fullstack Developer",
        location: "Arequipa, Peru",
      },
      {
        date: "Ene 2021 a Jun 2021",
        company: "Medlink.la",
        position: "Fullstack Developer",
        location: "Lima, Peru",
      },
      {
        date: "Jul 2021 a Oct 2022",
        company: "Fapro",
        position: "Backend Developer",
        location: "Chile",
      },
      {
        date: "Oct 2022 la actualidad",
        company: "Fapro",
        position: "Fullstack Developer",
        location: "Chile",
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
        percentage: 91,
      },
      {
        title: "Javascript",
        percentage: 95,
      },
      {
        title: "PHP",
        percentage: 90,
      },
      {
        title: "Laravel",
        percentage: 95,
      },
      {
        title: "Worpdress",
        percentage: 60,
      },
      {
        title: "VueJs",
        percentage: 80,
      },
      {
        title: "ReactJs",
        percentage: 80,
      },
      {
        title: "React Native",
        percentage: 90,
      },

      {
        title: "NodeJs",
        percentage: 100,
      },
    ].sort((a, b) => b.percentage - a.percentage),
  },
  methods: {
    randomInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomClass: function () {
      const classes = [
        "progress-bar-1",
        "progress-bar-2",
        "progress-bar-3",
        "progress-bar-4",
        "progress-bar-5",
        "progress-bar-striped",
      ];
      return classes[this.randomInteger(0, classes.length - 1)];
    },
  },
});
