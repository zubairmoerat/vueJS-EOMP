import { createStore } from 'vuex'
const dataUrl = 'https://zubairmoerat.github.io/zubairmoeratData/data/'

export default createStore({
  state: {
    home: null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setHome(state, value){
      state.home = value
    },
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    }
  },
  actions: {
    async fetchHome(context) {
      let res = await fetch(dataUrl)
      let {home} = await res.json()
      context.commit('setHome', home)
    },
    async fetchAbout(context) {
      let res = await fetch(dataUrl)
      let {about} = await res.json()
      context.commit('setAbout', about)
    },
    async fetchEducation(context) {
      let res = await fetch(dataUrl)
      let {education} = await res.json()
      context.commit('setEducation', education)
    },
    async fetchSkills(context) {
      let res = await fetch(dataUrl)
      let {skills} = await res.json()
      context.commit('setSkills', skills)
    },
    async fetchProjects(context) {
      let res = await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects)
    }
  },
  modules: {
  }
})
