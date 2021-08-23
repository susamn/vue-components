import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  searchedVideos: [],
  videos:[
    {
      id:1,
      title: "Introduction to python",
      author:100,
      thumbnail: "",
      tags:["technology","language","programming","python"],
      description:"lorem ipsum for python",
      url: "",
      rating: 4,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id: 2,
      title: "Vue Mastery",
      author: 200,
      thumbnail: "",
      tags:["technology","programming","javascript","vuejs"],
      description: "lorem ipsum for vue",
      url: "",
      rating: 3,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:3,
      title: "Nonblocking asynchronous programming with Golang",
      author:300,
      thumbnail: "",
      tags:["technology","language","programming","golang"],
      description: "Learn how to write non-blocking and asynchronous code in Golang with state of the art design patterns." +
          " Use goroutines and context api to write scalable and fault tollerent service. Deploy in any container of your choice" +
          " and monitor using splunk.",
      url: "",
      rating: 2,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:4,
      title: "Build a data orchestrator using project reactor",
      author: 300,
      thumbnail: "",
      tags:["technology","language","programming","java","spring","reactive"],
      description: "Build a reactive data orchestrator using spring's project reactor",
      url: "",
      rating: 5,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:5,
      title: "Functional programming with clojure",
      author: 100,
      thumbnail: "",
      tags:["technology","language","programming","clojure","functional"],
      description: "Learn functional programming with clojure",
      url: "",
      rating: 5,
      created: 0,
      status: "REVIEW"
    },
    {
      id:6,
      title: "Up and running with webpack",
      author:300,
      thumbnail: "",
      tags:["technology","packaging","programming","nodejs"],
      description: "Get started with webpack and how to build production ready application",
      url: "",
      rating: 4,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:7,
      title: "AI, ML driven by Python",
      author: 300,
      thumbnail: "",
      tags:["technology","language","programming","python","ai","ml"],
      description: "Learn basics of AI and ML with Python",
      url: "",
      rating: 3,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:8,
      title: "Rust programming concepts",
      author: 100,
      thumbnail: "",
      tags:["technology","language","programming","rust","system"],
      description: "Learn the Rust programming language and how to design system programs with it",
      url: "/video/video.mp4",
      rating: 4,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:9,
      title: "Advanced HTML5 concepts",
      author:100,
      thumbnail: "",
      tags:["technology","language","programming","web","html"],
      description:"lorem ipsum for html5",
      url: "",
      rating: 4,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id: 10,
      title: "Do you think you know CSS3?",
      author:200,
      thumbnail: "",
      tags:["technology","programming","css3","styling","web"],
      description:"lorem ipsum for css3",
      url: "",
      rating: 3,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id: 11,
      title: "What's new in ES6?",
      author:300,
      thumbnail: "",
      tags:["technology","language","programming","javascript","web","ECMA"],
      description: "Know what's new in ECMA script 6?",
      url: "",
      rating: 2,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:12,
      title: "Reinforcement learning",
      author: 300,
      thumbnail: "",
      tags:["technology","ai","programming","python","ml"],
      description: "Get introduced to the basics of reinforcement learning",
      url: "",
      rating: 5,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:13,
      title: "Neural networks",
      author: 100,
      thumbnail: "",
      tags:["technology","ai","programming","python","network"],
      description: "Introduction to neural networks and it's components",
      url: "",
      rating: 5,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:14,
      title: "Crack the kaggle competition",
      author:300,
      thumbnail: "",
      tags:["technology","competition","programming","python","ai","ml"],
      description: "Crack the kaggle competition with flying colors",
      url: "",
      rating: 4,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:15,
      title: "Up and running with Tensorflow",
      author: 300,
      thumbnail: "",
      tags:["technology","ai","programming","python","library","ml"],
      description: "Learn the basics of tensorflow library",
      url: "",
      rating: 3,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:16,
      title: "Advanced Python concepts",
      author: 100,
      thumbnail: "",
      tags:["technology","language","programming","python"],
      description: "Learn advanced python concepts with examples",
      url: "/video/video.mp4",
      rating: 4,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:17,
      title: "What's new in Java 16",
      author:300,
      thumbnail: "",
      tags:["java","java17","programming","language", "compiled"],
      description: "Get introduced with the new features in Java 16",
      url: "",
      rating: 0,
      created: 0,
      status: "AVAILABLE"
    },
    {
      id:18,
      title: "Proof of work vs Proof of stake",
      author: 300,
      thumbnail: "",
      tags:["cryptocurrency","pow","pos","eth2","blockchain"],
      description: "The autobiography of Prof. Einstein",
      url: "",
      rating: 0,
      created: 0,
      status: "REVIEW"
    },
    {
      id:19,
      title: "Introduction to Blockchain",
      author: 300,
      thumbnail: "",
      tags:["technology","finance","cryptocurrency","blockchain"],
      description: "Get introduced to blockchain technology",
      url: "/video/video.mp4",
      rating: 0,
      created: 0,
      status: "UPLOADED"
    },
    {
      id:20,
      title: "Bitcoin and Money",
      author: 300,
      thumbnail: "",
      tags:["technology","finance","cryptocurrency","blockchain", "bitcoin"],
      description:"Get introduced to bitcoin technology and it's relationship with money",
      url: "/video/video.mp4",
      rating: 0,
      created: 0,
      status: "UPLOADED",
    }
  ]
};

const paginated = (items, n) => new Array(Math.ceil(items.length / n))
    .fill()
    .map(() => items.splice(0, n));

const searchFunc = (state, author, search) => search == null ?
    author == null?
        state.videos.filter(v=>v.status==="AVAILABLE")
        :
        state.videos.filter( v => v.author === parseInt(author))
    :
    author == null?
        state.videos.filter(
            v =>
                v.status === "AVAILABLE" &&
                (v.tags.includes(search) ||
                    v.title.includes(search))):
        state.videos.filter(
            v =>
                v.author === parseInt(author) &&
                v.tags.includes(search) ||
                v.title.includes(search));

const getters={
  paginatedVideos: (state) => (author, search, count) => paginated(searchFunc(state,author, search), count),
  allVideos: (state) => (author, search) => searchFunc(state, author, search),
  getVideoById: (state) => (id) => state.videos.find(v =>
      v.status === "AVAILABLE" &&
      v.id === parseInt(id) ),
  allVideosByTag:(state) => (tag) => state.videos.find(v =>
      v.status === "AVAILABLE" &&
      v.tags.includes(tag))
};

const actions = {};

const mutations = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});