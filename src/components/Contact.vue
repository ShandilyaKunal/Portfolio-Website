<script setup lang="ts">
import ConactSVG from "../assets/svg/contact.svg";
</script>
<template>
    <section class="bg-gray-800 pb-8" id="contact">
        <div class="lg:container px-5 pt-14">
          <h2 class="title text-yellow-500" data-aos="fade-down">
            Hire Me
          </h2>
          <h4 class="subtitle" data-aos="fade-down">
            FOR YOUR PROJECTS
          </h4>
          <br />
          <div class="flex items-center flex-col space-y-4 lg:flex-row">
            <img
              :src="ConactSVG"
              alt="Contact SVG"
              data-aos="fade-right"
              class="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
            />
            <div
              data-aos="fade-left"
              class="ml-4 border-2 border-yellow-700 max-w-md
             p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
            >
              <div class="w-full max-w-md bg-gray-950 p-5">
                <h2 class="text-lg font-semibold text-gray-300 mb-2">
                  Contact details
                </h2>
                <address class="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
                  <div class="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                    Name <br />
                    Email <br />
                    Phone
                  </div>
                  <div
                    id="contact-details"
                    class="space-y-2 text-yellow-500 font-medium leading-loose"
                  >
                    Kunal Kumar Shandilya<br/>
                    kunalshandilya46@gmail.com <br/>+91 7033734535
                  </div>
                </address>
              </div>
  
              <p class="leading-7 text-gray-300">
                If you're interested in hiring me for your next project, feel free to reach out by clicking the button below. I'll get back to you as soon as possible!
              </p>
              <br />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalshandilya46@gmail.com&su=Project Inquiry&body=Hi Kunal,%0D%0A%0D%0AI am interested in hiring you for a project. Let's discuss the details!%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
                target="_blank"
                class="btn bg-yellow-700 hover:bg-yellow-500 text-white"
                >
                Hire Me
               </a>

            </div>
          </div>
        </div>
      </section>
</template>