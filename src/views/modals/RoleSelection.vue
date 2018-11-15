<template>
  <portal to="modals">
    <div v-show="open">
      <div ref="modal" @focusout="handleFocusOut" class="fixed pin opacity-20 flex justify-center items-center p-6">
        <div class="max-w-sm w-full bg-white px-8 pt-4 pb-10 rounded-lg shadow-lg">
          <button class="float-right" @click="$emit('close')">X</button>
          <div class="mb-8">
            <img class="block h-16 px-6 py-1 mx-auto" src="@/assets/mng-logo-1.png" alt="">
          </div>

          <p class="text-grey-dark ml-6 mb-10">Are you a...</p>

          <div class="flex justify-between items-center px-10">
            <!-- <router-link :to="{name:'register', params: {selectedRole: 'Physician'}}" class="text-grey-dark hover:text-green-light hover:font-semibold hover:underline hover:cursor-pointer"> -->
              <!-- https://github.com/dukestreetstudio/zondicons/blob/master/src/stethoscope.svg -->
              <!-- https://thenounproject.com/search/?q=stethescope&i=1576718 -->
              
              <!-- <div class="border-2 border-grey-dark rounded-full h-32 w-32 flex items-center justify-center">
                <svg class="fill-current h-16 w-16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="" xml:space="preserve">
                <g>
                  <g>
                    <path d="M46.966,23.345c0-3.814-3.115-6.92-6.931-6.92s-6.933,3.105-6.933,6.92c0,3.435,2.496,6.267,5.769,6.813v7.267    c0,5.664-4.597,10.261-10.261,10.261c-5.664,0-10.262-4.598-10.262-10.261L18.323,29.1c2.686-0.358,5.311-1.929,7.646-4.612    c0.343-0.394,0.447-0.902,0.388-1.387c3.052-4.035,4.945-9.53,4.945-13.754c0-6.521-2.922-7.198-7.754-8.304l-0.007-0.012    C23.244,0.433,22.644,0,21.917,0c-1.021,0-1.849,0.827-1.849,1.836c0,1.021,0.827,1.848,1.849,1.848    c0.404,0,0.783-0.168,1.084-0.407l0.043,0.016c4.691,1.077,5.957,1.369,5.957,6.054c0,3.715-1.758,8.69-4.445,12.282    c-0.445,0.026-0.885,0.222-1.214,0.588c-1.373,1.589-3.567,3.491-6.159,3.491c-2.59,0-4.782-1.884-6.155-3.469    c-0.33-0.366-0.769-0.562-1.211-0.587c-2.694-3.605-4.456-8.586-4.456-12.306c0-4.688,1.245-4.979,5.965-6.056l0.016-0.015    c0.324,0.239,0.677,0.408,1.107,0.408c1.021,0,1.848-0.828,1.848-1.848C14.296,0.827,13.47,0,12.448,0    c-0.729,0-1.328,0.433-1.646,1.029L10.798,1.03C5.961,2.146,3.034,2.811,3.034,9.347c0,4.228,1.9,9.743,4.979,13.777    c-0.059,0.485,0.046,0.994,0.389,1.387c2.333,2.665,4.933,4.23,7.616,4.589l0.003,8.324C16.022,44.359,21.676,50,28.61,50    c6.934,0,12.564-5.641,12.564-12.576v-7.267C44.446,29.611,46.966,26.779,46.966,23.345z M40.035,27.975    c-2.543,0-4.63-2.074-4.63-4.628c0-2.544,2.087-4.617,4.63-4.617s4.606,2.073,4.606,4.617    C44.642,25.9,42.578,27.975,40.035,27.975z"/>
                    <path d="M40.035,19.891c-1.91,0-3.466,1.545-3.466,3.455c0,1.921,1.556,3.464,3.466,3.464c1.909,0,3.466-1.543,3.466-3.464    C43.501,21.436,41.944,19.891,40.035,19.891z"/>
                  </g>
                </g>
                </svg>
              </div>
              <div class="">
                <p class="pt-4 text-center text-sm uppercase">Physician</p>
              </div> -->
            <!-- </router-link> -->
            <router-link :to="{name:'register', params: {selectedRole: 'User'}}" class="text-grey-dark hover:text-green-light hover:font-semibold hover:underline hover:cursor-pointer">
              <!-- https://github.com/dukestreetstudio/zondicons/blob/master/src/stethoscope.svg -->
              <!-- https://thenounproject.com/search/?q=stethescope&i=1576718 -->
              
                <div class="border-2 border-grey-dark rounded-full h-32 w-32 flex items-center justify-center">
                  <!-- font awesome hospital downloaded svg from download package  -->
                  <svg class="fill-current h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>
                </div>
                <div class="flex items-center justify-center">
                  <p class="pt-4 text-sm uppercase">User</p>
                  <svg class="fill-current h-4 w-4 text-grey-darker ml-2 mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                </div>
              
            </router-link>

            <router-link :to="{name:'register', params: {selectedRole: 'Admin'}}" class="text-grey-dark hover:text-green-light hover:font-semibold hover:underline hover:cursor-pointer">
              <!-- https://github.com/dukestreetstudio/zondicons/blob/master/src/stethoscope.svg -->
              <!-- https://thenounproject.com/search/?q=stethescope&i=1576718 -->
              <div class="border-2 border-grey-dark rounded-full h-32 w-32 flex items-center justify-center">
                <svg class="fill-current h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 244v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm140 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-76 84v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm76 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 124v36H0v-36c0-6.627 5.373-12 12-12h19.5V85.035C31.5 73.418 42.245 64 55.5 64H144V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88.5c13.255 0 24 9.418 24 21.035V464H436c6.627 0 12 5.373 12 12zM79.5 463H192v-67c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v67h112.5V112H304v24c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24v-24H79.5v351zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"/></svg>
              </div>
              <p class="pt-4 text-center text-sm uppercase">Administrator</p>
            </router-link>
            
          </div>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  props: ["open"],
  data() {
    return {
      options: [
        { name: "Physician", svg: "" },
        { name: "Administrator", svg: "" },
        { name: "User", svg: "" },
        { name: "Designee", svg: "" }
      ]
    };
  },
  created() {
    const escapeListener = e => {
      if (e.key === "Escape") {
        console.log("blah");
        this.$emit("close");
      }
      document.addEventListener("keydown", escapeListener);
      this.$on("hook:beforeDestroy", () => {
        document.removeEventListener("keydown", escapeListener);
      });
    };
  },
  methods: {
    handleFocusOut(e) {
      console.log(e);
      if (this.$refs.modal.contains(e.relatedTarget)) {
        return;
      }
      this.$emit("close");
    }
  }
};
</script>