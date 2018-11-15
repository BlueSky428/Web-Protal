<template>
  <div class="flex items-center">
    <div class="p-2">
      <svg class="fill-current inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
    </div>
    <!-- <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search by name, date of birth, identifier, physician, or test code"> -->
    <input 
      v-model="searchVal"
      :placeholder=searchPlaceholder 
      class="appearance-none border-b border-grey-light w-full py-2 text-grey-darker leading-tight focus:outline-none"
      v-on:keyup.enter="$emit('search',searchVal)"
      v-on:keyup.delete="$emit('search',searchVal)">
  </div>
</template>

<script>
export default {
  name: "searchbar",
  props: ["searchPlaceholder"],
  data() {
    return {
    }
  }
}
</script>
