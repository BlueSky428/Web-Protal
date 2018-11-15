<template>
  <div class="hidden md:block bg-white border-b select-none">
    <div class="px-4 flex items-end justify-between text-md">
      <div class="px-4 flex items-end" role="left">
        <router-link tag="div" to="/">
          <img class="hidden lg:block h-16 px-6 py-1" src="../assets/mng-logo-1.png" alt="">
        </router-link>

        <div class="flex -mb-px mr-6">
          <router-link exact-active-class="navbar-item-selected" tag="a" to="/about" class="no-underline text-grey-dark flex item-center pt-6 pb-2 border-b-2 border-transparent hover:text-blue-light hover:border-blue-light" href="#">
            <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V5zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z"/></svg>
            Orders
          </router-link>
        </div>

        <div class="flex -mb-px mr-6">
          <router-link exact-active-class="navbar-item-selected" tag="a" :to="{name:'reports'}" class="no-underline text-grey-dark flex item-center pt-6 pb-2 border-b-2 border-transparent hover:text-blue-light hover:border-blue-light" href="#">
            <!-- 
            1) https://github.com/dukestreetstudio/zondicons/tree/master/src
            2) click on one and select 'raw'
            detailed svg: https://github.com/sschoger/zondicons/tree/master/zondicons
          -->
            <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"/></svg>
            Reports
          </router-link>
        </div>

        <div class="flex -mb-px mr-6">
          <router-link exact-active-class="navbar-item-selected" tag="a" to="/" class="no-underline text-grey-dark flex item-center pt-6 pb-2 border-b-2 border-transparent hover:text-blue-light hover:border-blue-light" href="#">
            <!-- <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/></svg> -->
            <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/></svg>
            Administration
          </router-link>
        </div>
      </div>

      <div class="px-4 flex items-end" role="right">
        <div class="flex -mb-px mr-6">
          <router-link exact-active-class="navbar-item-selected" tag="a" to="/contact-us" class="no-underline text-grey-dark flex item-center pt-6 pb-2 border-b-2 border-transparent hover:text-blue-light hover:border-blue-light" href="#">
            <!-- <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/></svg> -->
            <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z"/></svg>
            Contact Us
          </router-link>
        </div>

        <div class="flex -mb-px mr-6">
          <a class="no-underline text-grey-dark flex item-center pt-6 pb-2 border-b border-transparent hover:text-blue-light hover:border-blue-light" href="#">
            <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>
            My Account
            </a>
        </div>

        <div class="flex -mb-px mr-6">
          <router-link exact-active-class="navbar-item-selected" tag="a" to="/" class="no-underline text-grey-dark flex item-center pt-6 pb-2 border-b-2 border-transparent hover:text-blue-light hover:border-blue-light" href="#">
            <!-- <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/></svg> -->
            <!-- notepad: https://material.io/tools/icons/?icon=launch&style=baseline -->
            Sign Out
            <svg class="fill-current inline-block h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>
