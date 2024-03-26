import { createStore } from 'vuex'
const dataUrl = 'https://zubairmoerat.github.io/finalresData/Data/'

export default createStore({
  state: {
    education: null,
    softskills: null,
    techskills:null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setEducation(state, value) {
      state.education = value
    },
    setSoftskills(state, value) {
      state.softskills = value
    },
    setTechskills(state, value){
      state.techskills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    }
  },
  actions: {
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl)
        let { education } = await res.json()
        context.commit('setEducation', education)
      } catch (e) {
        console.error('Error fetching Data', e)
      }
    },
    async fetchSoftskills(context) {
      try {
        let res = await fetch(dataUrl)
        let { softskills } = await res.json()
        context.commit('setSoftskills', softskills)
      } catch (e) {
        console.error('Error fetching Data', e)
      }
    },
    async fetchTechskills(context){
      try{
        let res = await fetch(dataUrl)
        let {techskills} = await res.json()
        context.commit('setTechskills', techskills)
      }catch(e){
        console.error('Error fetching Data', e)
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl)
        let { projects } = await res.json()
        context.commit('setProjects', projects)
      } catch (e) {
        console.error('Error fetching Data', e)
      }

    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl)
        let { testimonials } = await res.json()
        context.commit('setTestimonials', testimonials)
      } catch (e) {
        console.error('Error fetching Data', e)
      }
    },
  },
  modules: {
  }
})
