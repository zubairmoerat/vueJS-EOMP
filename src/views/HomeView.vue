<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Welcome to my Portfolio</h1>
    </div>
    <div class="row d-flex">
      <div class="col" v-if="jobTitle">
        <h3 v-for="job in jobTitle" :key="job.title">I'm {{ job.title }}</h3>
      </div>
      <div class="col">
        <img class="img-fluid" src="https://drive.google.com/uc?id=1G3WJXBiXyM8o8wr1XLjRBQA2IIsjvZBr" alt="portfolio" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  computed: {
    jobTitle() {
      return this.$store.state.jobTitle
    }
  },
  mounted() {
    this.$store.dispatch('fetchJobTitle')
  }
}
</script>
