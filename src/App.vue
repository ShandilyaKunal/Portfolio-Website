<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Skills from "./components/Skills.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import about from "./components/About.vue";
import Education from "./components/Education.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";

onMounted(()=>{
  AOS.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    })
})
</script>

<template>
  <div className="bg-gray-950">
    <Navbar />
    <Hero />
    <about/>
    <Education/>
    <Skills />
    <Services />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>

</style>
