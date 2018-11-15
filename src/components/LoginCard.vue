<template>
  <!-- flex justify-start content-center -->

  <div>
    <div class="w-108 p-8 mb-6 bg-white rounded-lg shadow-lg">
      <div class="">
        <img class="block h-16 px-6 py-1 mx-auto" src="@/assets/mng-logo-1.png" alt="">
      </div>
      <div class="">
        <p class="text-grey font-medium font-md pt-4 pb-4 text-lg">
          Welcome Back
        </p>
      </div>
      <div class="mb-4">
        <input type="text" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Email">
      </div>
      <div class="mb-4">
        <input type="password" class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Password">
      </div>

      <div class="">
        <div class="py-2">
          <router-link 
            exact-active-class="navbar-item-selected" 
            tag="a"
            to="/reports"
            class="no-underline"
            href="#">
          <button class="block w-full mx-auto bg-blue-dark hover:bg-blue-light text-white font-bold py-3 px-4 rounded">
              Sign In
          </button>
        </router-link>
          
        </div>
        <div class="justify-start">
          <a class="no-underline inline-block align-baseline font-medium text-sm text-blue hover:text-blue-dark pt-2" href="#">
            Forgot your password?
          </a>
        </div>
        <div class="justify-start">
          <button @click="modalOpen=true" class="no-underline inline-block align-baseline font-medium text-sm text-blue hover:text-blue-dark pt-2" href="#">
            Not registered? Request access now.
            <role-selection :open="modalOpen" @close="modalOpen=false"></role-selection>
          </button>
        </div>
      </div>
    </div>
    <portal-target name="modals" multiple/>
    
  </div>
</template>

<script>
import RoleSelection from "@/views/modals/RoleSelection";

export default {
  name: "logincard",
  components: {
    RoleSelection
  },
  data() {
    return {
      modalOpen: false
    };
  }
};
</script>