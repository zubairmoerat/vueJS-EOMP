<template>
    <h2 class="text-center">About Me</h2>
    <div class="row">
      <div class="col text-center">
        <p class="fs-5 text-center">I'm a dynamic individual with a passion for a well-rounded lifestyle. I find joy in
          staying active and fit, making frequent visits to the gym to engage in various workouts. The love for the outdoors
          is another facet of my life, as hiking, biking, and exploring nature provides a perfect balance to the tech-driven
          world.</p>
        <img class="img-fluid rounded-5" src="https://iili.io/J7mJV6J.jpg" alt="aboutMe" loading="lazy">
      </div>
      <div class="col text-center">
        <img class="img-fluid rounded-5" src="https://iili.io/J7mJwyN.md.jpg" alt="aboutMe" loading="lazy">
        <p class="fs-5 text-center">On the intellectual side, I'm deeply immersed in the fields of engineering and software
          development. With a keen interest in problem-solving and innovation, I enjoy tackling challenges both in the
          physical realm through engineering projects and in the virtual world through software development. This
          combination of a strong body, an adventurous spirit, and a sharp mind defines my multifaceted and fulfilling
          lifestyle.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
    components: {},
  }
  </script>
  
  <style scoped>
  img {
    width: 300px;
    height: 300px;
    box-shadow: 0 3px 5px #e9322e;
    margin-bottom: 15px;
  }
  
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  h2 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: underline;
    text-shadow: 0 2px 1px black;
  }
  
  .col {
    flex-basis: 50%;
  }
  
  @media (max-width:351px) {
    .row {
      flex-direction: column;
    }
  }</style>
  