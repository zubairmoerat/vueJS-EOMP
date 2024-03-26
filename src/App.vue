<template>
  <NavBar></NavBar>
  <HomeComp id="home"/>
  <AboutComp id="about"/>
  <ResumeComp id="resume"/>
  <ProjectComp id="projects"/>
  <TestimonialComp id="testimonials"/>
  <ContactComp id="contact"/>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import HomeComp from './components/HomeComp.vue';
import ResumeComp from './components/ResumeComp.vue';
import AboutComp from './components/AboutComp.vue';
import ProjectComp from './components/ProjectComp.vue';
import TestimonialComp from './components/TestimonialComp.vue';
import ContactComp from './components/ContactComp.vue';
export default{
  components: {
    NavBar,
    Footer,
    HomeComp,
    AboutComp,
    ResumeComp,
    ProjectComp,
    TestimonialComp,
    ContactComp
}
}
</script>

<style src="@/assets/css/style.css"></style>