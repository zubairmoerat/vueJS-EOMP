<template>
  <h1>About Me</h1>
  <div class="row" v-if="about">
    <p class="lead" v-for="title in about" :key="title">
      {{ title }}
    </p>
  </div>
  <div class="row d-flex">
    <div class="col">
      <img src="https://drive.google.com/uc?id=1B5T5SodqnAncHF4yWEMlWiXHqTlQSB8M" alt="about1">
    </div>
    <div class="col">
      <img src="https://drive.google.com/uc?id=1S7uY5JuA3UOhCbXKOKxmp7RsL3CoTfK6" alt="about2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {},
  computed: {
    about() {
      return this.$store.state.about
    }
  },
  mounted() {
    this.$store.dispatch('fetchAbout')
  }
}
</script>

<style scoped></style>
