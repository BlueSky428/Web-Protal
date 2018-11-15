<template>
  <div>
    <div class="block bg-grey-lightest border-b select-none">
      <div class="px-4 flex items-end justify-between text-md">
        <div class="px-4 flex items-end" role="left">
          <router-link tag="div" to="/">
            <img class="hidden lg:block h-16 px-6 py-1" src="../assets/mng-logo-1.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    {{selectedRole}}
    <form class="p-6">
      <fieldset>
        <!-- fieldset and legend for screenreader, really just a fancy div/block element -->
        <legend class="hidden">Enter your account information</legend> 
        <p class="text-lg font-semibold pb-2">Account</p>
        <div role = "account-info" class="xl:flex pb-6">
          <div class="w-full xl:w-2/3 px-4 flex">
            <div class="w-full">
              <div class="flex-wrap xl:flex xl:items-end">
                <div class="xl:w-1/3 xl:pr-4">
                  <div class="pt-2 flex justify-between">
                    <label for="npi-num">NPI Number</label>
                    <div>
                      <input v-model="isNotUsPhysician" type="checkbox" id="is-not-us-physician" class="">
                      <label for="is-not-us-physician" class="pl-1 text-sm font-medium text-grey-dark">I am not a U.S. Physician</label>
                    </div>
                  </div>
                  <input :disabled="!isNotUsPhysician" v-model.number="npi" type="text" id="npi-num" class="block appearance-none bg-white border border-grey-light px-2 py-2 rounded shadow mt-1 w-full hover:border-grey" placeholder="NPI Number">
                </div>
              
                <div class="mt-2 xl:w-1/3 xl:pr-4">
                  <label for="first-name" class="">First Name</label>
                  <input v-model="firstName" type="text" id="first-name" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="First Name">
                </div>

                <div class="mt-2 xl:w-1/3">
                  <label for="last-name" class="">Last Name</label>
                  <input v-model="lastName" type="text" id="last-name" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Last Name">
                </div>      
              </div>
              
              <div class="w-full flex-wrap xl:flex xl:mt-1">
                <div class="mt-2 xl:w-1/3 xl:pr-4">
                  <label for="phone" class="">Phone Number</label>
                  <input v-model="phone" type="text" id="phone" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Phone Number">
                </div>

                <div class="mt-2 xl:w-1/3 xl:pr-4">
                  <label for="fax" class="">Fax Number</label>
                  <input v-model="fax" type="text" id="fax" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Fax Number">
                </div>

                <div class="mt-2 xl:w-1/3">
                  <label for="title" class="">Title</label>
                  <input v-model="title" type="text" id="title" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Title">
                </div>              
              </div>

              <div class="w-full flex-wrap xl:flex xl:mt-1">
                <div class="mt-2 xl:w-1/3 xl:pr-4">
                  <label for="email" class="">Email Address</label>
                  <input v-model="email" type="text" id="email" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Email Address">
                </div>
                
                <div class="mt-2 xl:w-1/3 xl:pr-4">
                  <label for="password" class="">Password</label>
                  <input v-model="password" type="password" id="password" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Password">
                </div>
                
                <div class="mt-2 xl:w-1/3">
                  <label for="confirm-password" class="">Confirm Password</label>
                  <input v-model="confirmPassword" type="password" id="confirm-password" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded mt-1 shadow w-full" placeholder="Confirm Password">
                </div>              
              </div>
            </div>
          </div>
          <div class="text-grey-dark font-medium text-sm px-4 mt-4 flex items-end xl:justify-end">
            <div>
              <p class="pb-2">Your password must:</p>
              <div>
                <div class="flex content-center">
                  <svg class="fill-current inline-block h-4 w-4 mr-2" :class="[passwordLength(8) ? 'text-green': '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                  <p class="pb-px">Be at least 8 characters long</p>
                </div>
                <div class="flex content-center">
                  <svg class="fill-current inline-block h-4 w-4 mr-2" :class="[passwordsMatch() ? 'text-green': '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                  <p class="pb-px">Match the confirmed password</p>
                </div>
                <div class="flex content-center">
                  <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                  <p class="pb-px">Contain at least 1 uppercase letter</p>
                </div>
                <div class="flex content-center">
                  <svg class="fill-current inline-block h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                  <p class="pb-px">Contain at least 1 lowercase letter</p>
                </div>
                <div class="flex content-center">
                  <svg class="fill-current inline-block h-4 w-4 mr-2" :class="[passwordHasNumber() ? 'text-green': '']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                  <p class="pb-px">Contain at least 1 number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      
      <fieldset class="border-t">
        <!-- fieldset and legend for screenreader, really just a fancy div/block element -->
        <legend class="hidden">Enter your facility information</legend> 
        <div role = "facility-info" class="flex pt-4">
          <div class="w-full lg:w-1/2 xl:w-1/3 flex flex-wrap content-between pb-6">
            <p class="text-lg font-semibold w-full pb-2">Facility</p>
            <div class ="w-full px-4">
              <div class="mt-2">
                <label for="organization" class="">Organization</label>
                <input v-model="organization" type="text" id="organization" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Organization">
              </div>
              <div class="mt-2">
                <label for="address_one" class="">Address</label>
                <input v-model="addressOne" type="text" id="address_one" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="Address 1">
                <input v-model="addressTwo" type="text" id="address_two" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full mt-2" placeholder="Address 2">
              </div>
              
              <div class="mt-2 w-full lg:w-2/5">
                <label for="zipcode" class="">ZIP/Postal Code</label>
                <input v-model="zipcode" type="text" id="zipcode" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="ZIP/Postal Code">
              </div>
              <div class="mt-2 w-full lg:w-3/5">
                <label for="city" class="">City</label>
                <input v-model="city" type="text" id="city" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="City">
              </div>
              <div class="mt-2 w-full lg:w-3/5">
                <label for="stateProvRegion" class="">State/Providence/Region</label>
                <input v-model="stateProvRegion" type="text" id="stateProvRegion" class="block appearance-none bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow mt-1 w-full" placeholder="State/Providence/Region">
              </div>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="block bg-white border-t flex justify-end select-none">
        <p class="text-red">Need to have lookup css class for button template, not sizing though</p>
        <router-link tag="button" :to="{name:'home'}" class="no-underline text-blue bg-transparent font-semibold px-6 py-2 mt-4 mr-2 border-transparent hover:text-blue-darker">Cancel</router-link>
        <router-link tag="button" :to="{name:'reports'}" class="no-underline text-white bg-blue font-semibold px-6 py-2 mt-4 rounded border-transparent hover:bg-blue-light">Submit Request</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "registration",
  components: {},
  props: {
    selectedRole: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      errors: [],
      npi: null,
      isNotUsPhysician: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      title: null,
      phone: null,
      fax: null,
      organization: null,
      addressOne: null,
      addressTwo: null,
      zipcode: null,
      stateProvRegion: null,
      city: null
    };
  },
  methods: {
    passwordHasNumber() {
      return /\d/.test(this.password);
    },
    passwordLength(requiredLength) {
      if (this.password) {
        return this.password.length >= requiredLength;
      }
    },
    passwordsMatch() {
      if (this.password && this.confirmPassword) {
        return this.password == this.confirmPassword;
      }
    }
  }
};
</script>
