<script setup lang="ts">
import HeroSVG from "../assets/svg/hero.svg";
import ProfilePic from "../assets/img/profile-pic.jpg"; // Adjust the path to your profile picture
</script>

<template>
  <section id="home" class="mx-auto max-w-7xl overflow-hidden bg-gray-950">
    <div class="relative flex min-h-screen flex-row">
      <div
        class="absolute bottom-0 right-0 top-0 h-full w-2/12 bg-yellow-500 lg:w-3/12 z-40"
        data-aos="slide-left"
        data-aos-delay="1200"
      >
        <div class="flex h-full flex-col justify-center">
          <h1 class="realitive right-[-50%] top-[50%] rotate-90 space-x-4 md:right-0">
            <span class="text-white">Kunal</span>
            <span class="text-gray-950">Kumar</span>
          </h1>
        </div>
      </div>
      <div class="flex w-10/12 flex-col-reverse items-center justify-center md:flex-row md:items-end">
        <div class="flex flex-col items-center px-6 pb-16 pt-5 md:items-start" data-aos="fade-down">
          <!-- Profile Picture -->
          <div class="mb-4">
            <img
              :src="ProfilePic"
              alt="Profile Picture"
              class="w-32 h-32 rounded-full object-cover border-4 border-yellow-500"
            />
          </div>
          <h2 class="text-yellow-500">PHP Developer</h2>
          <br />
          <div class="flex justify-end">
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalshandilya46@gmail.com&su=Project Inquiry&body=Hi Kunal,%0D%0A%0D%0AI am interested in hiring you for a project. Let's discuss the details!%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
                target="_blank"
                class="btn bg-yellow-700 hover:bg-yellow-500 text-white"
                >
                Hire Me
               </a>
          </div>
          <div class="mt-10 flex flex-col gap-10">
            <div
              class="flex w-80 items-center gap-5"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <h3 class="text-gray-100">1+</h3>
              <p class="text-gray-200">Years of experience</p>
            </div>
            <div
              class="flex w-80 items-center gap-5"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <h3 class="text-gray-100">10+</h3>
              <p class="text-gray-200">Projects created</p>
            </div>
          </div>
        </div>
        <div class="mb-4 mt-16 h-96 md:-mb-16 md:h-full">
          <img
            :src="HeroSVG"
            alt="Hero"
            class="h-full rounded-xl bg-gray-950 object-cover"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>
    </div>
  </section>
</template>
