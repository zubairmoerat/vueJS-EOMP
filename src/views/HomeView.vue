<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Welcome to my Portfolio</h1>
    </div>
    <div class="row d-flex">
      <div class="col" v-if="Home">
        <h3 v-for="title in Home" :key="title">{{ title }}</h3>
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
    Home() {
      return this.$store.state.home
    }
  },
  mounted() {
    this.$store.dispatch('fetchHome')
  }
}
</script>
