<template>
  <body class="bg-grey-lightest bg-cover-image bg-center h-screen">
    <login-card class="h-full flex justify-end items-center mr-48"></login-card>
  </body>

    <!-- <div style="background-image: url('@/assets/park_1920.jpg')" class="bg-auto"> -->
      <!-- <img class="bg-contain" src="@/assets/park_1920.jpg" alt=""> -->
   
    <!-- </div> -->
</template>

<script>
import LoginCard from "@/components/LoginCard";

export default {
  name: "home",
  components: {
    LoginCard
  }
};
</script>

<style>
@responsive {
  .bg-cover-image {
    background-image: url("../assets/park_1920_flipped.jpg");
  }
}
</style>
