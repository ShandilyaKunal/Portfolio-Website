<script setup lang="ts">
import AboutMeImage from "../assets/img/about-removebg-preview.png";
import CVPDF from "../assets/Kunal_Kumar_Shandilya_Resume.pdf"; // Update with the correct path to your CV file
</script>

<template>
  <section class="bg-gray-800 pb-8" id="about">
    <div class="lg:container px-5 pt-14">
      <h2 class="title text-yellow-500" data-aos="fade-down">
        About Me
      </h2>
      <h4 class="subtitle" data-aos="fade-down">
        INTRODUCTION
      </h4>
      <br />
      <div class="flex items-center flex-col space-y-4 lg:flex-row">
        <img
          :src="AboutMeImage"
          alt="About Me"
          data-aos="fade-right"
          class="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
        />
        <div
          data-aos="fade-left"
          class="ml-4 border-2 border-yellow-700 max-w-md p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] bg-gray-950"
        >
          <h2 class="text-lg font-semibold text-gray-300 mb-2">
            Who Am I?
          </h2>
          <p class="leading-7 text-gray-300">
            Hello! I'm Kunal Kumar Shandilya, a passionate web developer with expertise in various technologies including PHP, HTML, CSS, JavaScript, and more. I enjoy creating dynamic and responsive web applications and have a strong background in both front-end and back-end development.
          </p>
          <br />
          <p class="leading-7 text-gray-300">
            With a BTech degree and hands-on experience from various projects and internships, I'm excited to take on new challenges and contribute to innovative projects. Feel free to explore my work and reach out if you have any questions or opportunities!
          </p>
          <br />
          <a
            :href="CVPDF"
            download="Kunal-Kumar-Shandilya-CV.pdf"
            target="_blank"
            class="btn bg-yellow-700 hover:bg-yellow-500 text-white"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
