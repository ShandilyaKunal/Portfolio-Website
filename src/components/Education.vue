<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline';
import { educationItems } from '../data/index'; // Ensure path is correct
</script>

<template>
      <section id="education">
        <div class="md:container px-5 py-14">
          <h2 class="title text-yellow-500" data-aos="fade-down">
            Education
          </h2>
          <h4 class="subtitle text-gray-50" data-aos="fade-down">
            MY ACADEMIC JOURNEY
          </h4>
      <br />
      <!-- <div classe="flex gap-5 justify-between flex-wrap group">
        <div v-for="(item,index) in educationItems" :key="index"
          class="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-yellow-600 p-6 flex-1 group-hover:blur-sm 
          hover:!blur-none"
          data-aos="fade-up"
          :data-aos-delay="index * 500"
        >
          <h6 class="my-3 text-gray-50">{{item.title}}</h6>
          <p class="leading-7 text-gray-200">{{item.description}}</p>
          <p class="leading-7 text-gray-200">{{item.year}}</p>
        </div>
    </div> -->
    <div class="flex flex-wrap justify-center gap-4">
        <div v-for="(item,educationIndex) in educationItems" :key="educationIndex"
          class="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-800 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="educationIndex * 400"
        >
          <div>
            <b><h5 class="text-yellow-300">{{item.year}}</h5></b>
            <h6 class="text-gray-100">{{ item.title }}</h6>
            <h7 class="italic text-gray-100">{{item.university}}</h7>
            <p class="italic text-gray-300">{{ item.description }}</p>
            <!-- <div class="absolute right-3 top-3 text-xl text-yellow-500">
              <ArrowUpRightIcon class="size-6 text-yellow-600"/>
            </div> -->
          </div>
        </div>
    </div>
    </div>
  </section>
</template>
