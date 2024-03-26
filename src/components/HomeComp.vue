<template>
    <div class="container">
      <h1 class="text-center">Welcome to my Portfolio</h1>
      <div class="row">
        <div class="col">
          <h3 class="text-center">I am Zubair Moerat an Aspiring Software Developer.</h3>
        </div>
        <div class="col">
          <img class="img-fluid rounded-5" src="https://iili.io/J760HNf.md.jpg" alt="portfolio" loading="lazy">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomeView',
    components: {}
  }
  </script>
  
  <style scoped>
  img {
    box-shadow: 0 3px 5px #e9322e;
    margin-left: 50px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }
  
  .col {
    flex-basis: 50%;
  }
  
  .container h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-decoration: underline;
    text-shadow: 0 2px 1px black;
  }
  
  .col h3 {
    text-shadow: 0 2px 1px #e9322e;
  }
  
  @media (max-width:351px) {
    img {
      box-shadow: 0 3px 5px #e9322e;
      margin: 0;
      margin-top: 15px;
    }
  }</style>