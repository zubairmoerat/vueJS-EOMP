<template>
  <div class="container-fluid">
    <h1 class="text-center">Welcome to my Portfolio</h1>
    <div class="row">
      <div class="col" v-if="Home">
        <h3 v-for="title in Home" :key="title">{{ title }}</h3>
      </div>
      <div class="col">
        <img class="img-fluid" src="https://drive.google.com/uc?id=1E--WvyB8NWDuQp1XU7LQRPplxTil0GtS" alt="portfolio" loading="lazy">
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

<style scoped>
img {
  width: 300px;
  height: 300px;
  padding-bottom: 50px;
}
</style>